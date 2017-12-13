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
import 'angular-material-data-table/dist/md-data-table.min.css';
import './rules.scss';

import uiRouter from 'angular-ui-router';

import RulesRoutes from './rules.routes';
import RulesController from './rules.controller';
import RulesEditorController from './rules-editor.controller';
import blockyApiRule from '../api/rule.service';

export default angular.module('blocky.rules', [
        uiRouter,
        blockyApiRule
    ])
    .config(RulesRoutes)
    .controller('RulesController', RulesController)
    .controller('RulesEditorController', RulesEditorController)
    .name;