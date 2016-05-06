'use strict';

describe('Service: glassdoor', function () {

  // load the service's module
  beforeEach(module('frontEndApp'));

  // instantiate service
  var glassdoor;
  beforeEach(inject(function (_glassdoor_) {
    glassdoor = _glassdoor_;
  }));

  it('should do something', function () {
    expect(!!glassdoor).toBe(true);
  });

});
