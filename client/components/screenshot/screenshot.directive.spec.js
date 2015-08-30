'use strict';

describe('Directive: screenshot', function () {

  // load the directive's module and view
  beforeEach(module('vujohnnyApp'));
  beforeEach(module('components/screenshot/screenshot.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<screenshot></screenshot>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the screenshot directive');
  }));
});
