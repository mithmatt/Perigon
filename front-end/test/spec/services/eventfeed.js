'use strict';

describe('Service: eventfeed', function () {

  // load the service's module
  beforeEach(module('frontEndApp'));

  // instantiate service
  var eventfeed;
  beforeEach(inject(function (_eventfeed_) {
    eventfeed = _eventfeed_;
  }));

  it('should do something', function () {
    expect(!!eventfeed).toBe(true);
  });

});
