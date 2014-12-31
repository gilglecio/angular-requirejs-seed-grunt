'use strict';

define([
	'angular',
	'filters',
	'services',
	'directives',
	'uiRouter',
], function(angular, filters, services, directives) {

	return angular.module('App', [

		/**
		 * Dependencies
		 */
		'ui.router',

		/**
		 * Shareds
		 */
		'App.filters',
		'App.services',
		'App.directives',

		/**
		 * Modules
		 */
		'App.posts'
	]);
});