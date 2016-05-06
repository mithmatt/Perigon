'use strict';

describe('Controller: GlassdoorCtrl', function () {

  // load the controller's module
  beforeEach(module('frontEndApp'));

  var GlassdoorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GlassdoorCtrl = $controller('GlassdoorCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GlassdoorCtrl.awesomeThings.length).toBe(3);
  });
});
