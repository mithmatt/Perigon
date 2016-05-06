'use strict';

describe('Controller: EventfeedCtrl', function () {

  // load the controller's module
  beforeEach(module('frontEndApp'));

  var EventfeedCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EventfeedCtrl = $controller('EventfeedCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EventfeedCtrl.awesomeThings.length).toBe(3);
  });
});
