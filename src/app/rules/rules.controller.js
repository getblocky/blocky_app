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
export default function RulesController($state, ruleService, userService) {
    var vm = this;

    vm.isUserLoaded = userService.isAuthenticated();
    vm.rules = [];

    if (vm.isUserLoaded) {
        loadUserRules();
    } else {
        $state.go('home.rules.new');
    }

    function loadUserRules() {
        ruleService.getAllRules().then(function success(rules) {
            vm.rules = rules;
            if (!vm.rules.length) {
                $state.go('home.rules.new');
            }
        });
    }
}