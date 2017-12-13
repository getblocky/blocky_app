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
export default angular.module('blocky.api.rule', [])
    .factory('ruleService', RuleService).name;

/*@ngInject*/
function RuleService($http, $q, $rootScope, $filter, settings) {

    var allRules = undefined;

    $rootScope.ruleServiceStateChangeStartHandle = $rootScope.$on('$stateChangeStart', function () {
        invalidateRulesCache();
    });

    var service = {
        getAllRules: getAllRules,
        getRule: getRule,
        deleteRule: deleteRule,
        saveRule: saveRule,
        addRule: addRule
    }

    return service;

    function invalidateRulesCache() {
        allRules = undefined;
    }

    function loadRulesCache() {
        var deferred = $q.defer();

        if (!allRules) {
            var url = settings.baseApiUrl + '/rules';
            $http.get(url, null).then(function success(response) {
                allRules = response.data;
                deferred.resolve();
            }, function fail() {
                deferred.reject();
            });
        } else {
            deferred.resolve();
        }
        return deferred.promise;
    }

    function getAllRules() {
        var deferred = $q.defer();

        loadRulesCache().then(
            function success() {
                deferred.resolve(allRules);
            },
            function fail() {
                deferred.reject();
            }
        );
        return deferred.promise;
    }

    function getRule(ruleId) {
        var deferred = $q.defer();
        var url = settings.baseApiUrl + '/rules/' + ruleId;
        $http.get(url, null).then(function success(response) {
            deferred.resolve(response.data);
        }, function fail(response) {
            deferred.reject(response.data);
        });
        return deferred.promise;
    }

    function saveRule(rule) {
        var deferred = $q.defer();
        var url = settings.baseApiUrl + '/rules/' + rule.id;
        $http.put(url, rule).then(function success(response) {
            invalidateRulesCache();
            deferred.resolve(response.data);
        }, function fail(response) {
            deferred.reject(response.data);
        });
        return deferred.promise;
    }

    function deleteRule(ruleId) {
        var deferred = $q.defer();
        var url = settings.baseApiUrl + '/rules/' + ruleId;
        $http.delete(url).then(function success() {
            invalidateRulesCache();
            deferred.resolve();
        }, function fail(response) {
            deferred.reject(response.data);
        });
        return deferred.promise;
    }

    function addRule(rule) {
        var deferred = $q.defer();
        var url = settings.baseApiUrl + '/rules';
        $http.post(url, rule).then(function success(response) {
            invalidateRulesCache();
            deferred.resolve(response.data);
        }, function fail(response) {
            deferred.reject(response.data);
        });
        return deferred.promise;
    }

}
