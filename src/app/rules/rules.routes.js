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
/* eslint-disable import/no-unresolved, import/default */

import rulesTemplate from './rules.tpl.html';
import rulesEditorTemplate from './rules-editor.tpl.html';

/* eslint-enable import/no-unresolved, import/default */

/*@ngInject*/
export default function RulesRoutes($stateProvider) {

    $stateProvider
        .state('home.rules', {
            url: '/rules',
            module: 'public',
            views: {
                "content@home": {
                    templateUrl: rulesTemplate,
                    controllerAs: 'vm',
                    controller: 'RulesController'
                }
            },
            data: {
                pageTitle: 'home.rules'
            }
        })
        .state('home.rules.new', {
            url: '/new',
            views: {
                "content@home": {
                    templateUrl: rulesEditorTemplate,
                    controllerAs: 'vm',
                    controller: 'RulesEditorController'
                }
            }
        })
        .state('home.rules.view', {
            url: '/:ruleId',
            views: {
                "content@home": {
                    templateUrl: rulesEditorTemplate,
                    controllerAs: 'vm',
                    controller: 'RulesEditorController'
                }
            }
        });
}