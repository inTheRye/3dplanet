'use strict';

describe('Directive: makeMars', function () {

  // load the directive's module
  beforeEach(module('3dplanetApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<make-mars></make-mars>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the makeMars directive');
  }));
});
