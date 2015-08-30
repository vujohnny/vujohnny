'use strict';

angular.module('vujohnnyApp')
    .directive('screenshot', function() {
        return {
            templateUrl: 'components/screenshot/screenshot.html',
            restrict: 'EA',
            require: '^url',
            scope: {
                url: '='
            }
        };
    });