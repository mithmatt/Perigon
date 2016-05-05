'use strict';

describe('Controller: TwitterfeedCtrl', function () {

  // load the controller's module
  beforeEach(module('frontEndApp'));

  var TwitterfeedCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TwitterfeedCtrl = $controller('TwitterfeedCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TwitterfeedCtrl.awesomeThings.length).toBe(3);
  });
});
