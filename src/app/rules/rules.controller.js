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

/* eslint-disable no-undef, angular/window-service, angular/document-service */

/*@ngInject*/
export default function RulesController($state, ruleService, userService, $scope, $mdDialog, $translate) {
    var vm = this;

    vm.isUserLoaded = userService.isAuthenticated();
    vm.rules = [];

    if (vm.isUserLoaded) {
        loadUserRules();
    }
    
    vm.query = {
        order: '-updatedAt',
        limit: 10,
        page: 1
    };
    vm.selected = [];
    vm.filters = [];

    $scope.$watch('filter.search', function (newValue) {
        if (angular.isDefined(newValue)) {
            vm.filters = newValue.split(' ');
        }
    });

    vm.searchData = {};

    vm.customSearch = function (item) {
        vm.searchData.status = true;
        angular.forEach(vm.filters, function (value1) {
            vm.searchData.tempStatus = false;
            angular.forEach(item, function (value2) {
                var dataType = typeof (value2);
                if (dataType == 'string' && (!value2.includes('object'))) {
                    if (value2.toLowerCase().includes(value1)) {
                        vm.searchData.tempStatus = true;
                    }
                } else if (dataType == 'number') {
                    var num = value2.toString();
                    if (num.includes(value1)) {
                        vm.searchData.tempStatus = true;
                    }
                }
            });
            vm.searchData.status = vm.searchData.status & vm.searchData.tempStatus;
        });

        return vm.searchData.status;
    };

    vm.addNewRule = addNewRule;
    vm.openRule = openRule;
    vm.changeRuleStatus = changeRuleStatus;
    vm.deleteRule = deleteRule;

    function loadUserRules() {
        vm.promise = ruleService.getAllRules().then(function success(rules) {
            vm.rules = rules;
        });
    }

    function addNewRule() {
        $state.go('home.rules.new');
    }

    function openRule(id) {
        $state.go('home.rules.view', {
            ruleId: id
        });
    }

    function changeRuleStatus(rule) {
        ruleService.saveRule(rule);
    }

    function deleteRule(rule, $event) {
        var confirm = $mdDialog.confirm()
            .targetEvent($event)
            .title($translate.instant('rules.delete-rule-title', {
                ruleName: rule.name
            }))
            .htmlContent($translate.instant('rules.delete-rule-text'))
            .ariaLabel($translate.instant('action.delete'))
            .cancel($translate.instant('action.cancel'))
            .ok($translate.instant('action.delete'));
        $mdDialog.show(confirm).then(function () {
                ruleService.deleteRule(rule.id).then(function success() {
                    loadUserRules();
                });
            },
            function () {});
    }
}