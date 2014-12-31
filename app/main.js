'use strict';

require.config({
	paths: {
		'requirejs-text': 	'../bower_components/requirejs-text/text'

		angular: 		 	'../bower_components/angular/angular',
		uiRouter: 	 		'../bower_components/ui-router/release/angular-ui-router',
		angularMocks: 	 	'../bower_components/angular-mocks/angular-mocks',
		'angular-mocks': 	'../bower_components/angular-mocks/angular-mocks',
		'angular-route': 	'../bower_components/angular-route/angular-route',
		'angular-scenario': '../bower_components/angular-scenario/angular-scenario',
		
		'angular-strap': 	'../bower_components/angular-strap/angular-strap',

		/**
		 * Shared modules
		 */
		directives: 'shared/directives',
		filters: 	'shared/filters',
		routes: 	'shared/routes',
		services: 	'shared/services',
	},
	shim: {
		'angular-strap': ['angular'],
		angular: {
			exports: 'angular'
		},
		uiRouter: ['angular'],
		angularMocks: {
			deps: [
				'angular'
			],
			exports: 'angular.mock'
		}
	},
	priority: [
		'angular'
	]
});

window.name = "NG_DEFER_BOOTSTRAP!";

require([
	'angular',
	'app'
], function(angular, app) {

	var $html = angular.element(document.getElementsByTagName('html')[0]);

	angular.element().ready(function() {
		angular.resumeBootstrap([app.name]);
	});
});