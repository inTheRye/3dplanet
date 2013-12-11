'use strict';

describe('Directive: makeMoon', function () {

  // load the directive's module
  beforeEach(module('3dplanetApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<make-moon></make-moon>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the makeMoon directive');
  }));
});
