'use strict';

function homeRouting($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/home',
            templateProvider: ($q) => { //动态加载
                return $q((resolve) => {
                    require.ensure([], () => resolve(require('/test')));
                });
            },
            // template: require('/test'), // include small templates into routing configuration
            controller: 'HomeController as vm',
            resolve: {
                loadHomeController: ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
                            // load whole module
                            let module = require('./home');
                            $ocLazyLoad.load({
                                name: 'home'
                            });
                            resolve(module.controller);
                        });
                    });
                }
            }
        });
}

export default angular
    .module('home.routing', [])
    .config(homeRouting);