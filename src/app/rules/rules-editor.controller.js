/*
 * Copyright © 2017 The Blocky Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint-disable angular/angularelement */
import blocklyRulesToolbox from './blockly-rules-toolbox.tpl.html';
import blocklyRulesWorkspace from './blockly-rules-workspace.tpl.html';

/* eslint-disable no-undef, angular/window-service, angular/document-service */

/*@ngInject*/
export default function RulesEditorController($log, $stateParams, $state, ruleService, userService, $timeout, $scope, $rootScope, $mdDialog, $translate) {
    var vm = this;

    vm.isUserLoaded = userService.isAuthenticated();
    vm.rule = {
        name: '',
        xml: '',
        triggers: {},
        actions: {},
        status: 0
    };
    vm.ruleId = $stateParams.ruleId;
    vm.workspace = null;
    vm.blocklyRulesToolbox = blocklyRulesToolbox;
    vm.blocklyRulesWorkspace = blocklyRulesWorkspace;

    initRuleData();

    $scope.$on("$destroy", function () {
        window.removeEventListener('resize', onResize, false);
    });

    vm.saveRule = saveRule;
    vm.deleteRule = deleteRule;
    vm.changeRuleStatus = changeRuleStatus;
    vm.newRule = newRule;

    function initRuleData() {
        if (vm.ruleId) { // Load existing rule
            ruleService.getRule(vm.ruleId).then(
                function success(rule) {
                    vm.rule.id = rule.id;
                    vm.rule.name = rule.name;
                    vm.rule.xml = rule.xml || '';
                    vm.rule.triggers = rule.triggers || '';
                    vm.rule.actions = rule.actions || '';
                    vm.rule.status = rule.status || 0;

                    $timeout(function () {
                        injectBlockly(Blockly.Xml.textToDom(vm.rule.xml));
                    }, 100);
                },
                function fail() {
                    toast.showError($translate.instant('rules.rule-load-failed-error'));
                }
            );
        } else {
            $timeout(function () {
                injectBlockly(document.getElementById('workspaceBlocks'));
            }, 100);
        }
    }

    function injectBlockly(xml) {
        if (!vm.workspace) {
            var blocklyDiv = document.getElementById('blocklyDiv');
            vm.workspace = Blockly.inject(blocklyDiv, {
                grid: {
                    spacing: 25,
                    length: 3,
                    colour: '#ccc',
                    snap: true
                },
                toolbox: document.getElementById('toolbox'),
                zoom: {
                    controls: true,
                    wheel: false
                }
            });

            Blockly.Xml.domToWorkspace(xml, vm.workspace);

            var blocklyArea = document.getElementById('main-content');
            if (blocklyArea.offsetHeight) {
                onResize();
            } else {
                $timeout(function () {
                    onResize();
                }, 500);
            }
        }
        window.addEventListener('resize', onResize, false);
        onResize();
        Blockly.svgResize(vm.workspace);
    }

    function onResize() {
        var blocklyArea = document.getElementById('main-content');
        var blocklyDiv = document.getElementById('blocklyDiv');
        // Compute the absolute coordinates and dimensions of blocklyArea.
        var el = blocklyArea;
        var x = 0;
        var y = 0;
        do {
            el = el.offsetParent;
        } while (el);
        // Position blocklyDiv over blocklyArea.
        blocklyDiv.style.left = x + 'px';
        blocklyDiv.style.top = y + 'px';
        blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
        blocklyDiv.style.height = blocklyArea.offsetHeight + 'px';
    }

    function saveRule() {
        var xml = Blockly.Xml.workspaceToDom(vm.workspace);
        vm.rule.xml = Blockly.Xml.domToText(xml);
        var code = Blockly.JavaScript.workspaceToCode(vm.workspace);
        vm.rule.triggers = code.substring(code.lastIndexOf('<blocky_triggers>') + 17, code.lastIndexOf('</blocky_triggers>'));
        vm.rule.actions = code.substring(code.lastIndexOf('<blocky_actions>') + 16, code.lastIndexOf('</blocky_actions>'));
        $log.log(vm.rule);
        if (vm.isUserLoaded) {
            if (angular.isUndefined(vm.rule.id) || vm.rule.id.length === 0) { // New rule
                addRule();
            } else { // Existing rule
                ruleService.saveRule(vm.rule);
            }
        } else {
            $rootScope.login();
        }
    }

    function addRule() {
        ruleService.addRule(vm.rule).then(
            function success(rule) {
                vm.rule.id = rule.id;
                $state.go('home.rules.view', {
                    ruleId: rule.id
                });
            },
            function fail() {
                toast.showError($translate.instant('rules.rule-save-failed-error'));
            }
        );
    }

    function deleteRule($event) {
        var confirm = $mdDialog.confirm()
            .targetEvent($event)
            .title($translate.instant('rules.delete-rule-title', {
                ruleName: vm.rule.name
            }))
            .htmlContent($translate.instant('rules.delete-rule-text'))
            .ariaLabel($translate.instant('action.delete'))
            .cancel($translate.instant('action.cancel'))
            .ok($translate.instant('action.delete'));
        $mdDialog.show(confirm).then(function () {
                ruleService.deleteRule(vm.rule.id).then(function success() {
                    newRule();
                });
            },
            function () {});
    }

    function changeRuleStatus() {
        if (vm.rule.status) {
            vm.rule.status = 0;
        } else {
            vm.rule.status = 1;
        }
        saveRule();
    }

    function newRule() {
        vm.rule = {
            name: '',
            xml: '',
            triggers: {},
            actions: {},
            status: 0
        };
        if (angular.isDefined(Blockly.mainWorkspace)) {
            Blockly.mainWorkspace.clear();
        }
        Blockly.Xml.domToWorkspace(document.getElementById('workspaceBlocks'),
            vm.workspace);
        $state.go('home.rules.new');
    }
}