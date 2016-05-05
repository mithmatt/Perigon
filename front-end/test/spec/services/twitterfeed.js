'use strict';

describe('Service: twitterfeed', function () {

  // load the service's module
  beforeEach(module('frontEndApp'));

  // instantiate service
  var twitterfeed;
  beforeEach(inject(function (_twitterfeed_) {
    twitterfeed = _twitterfeed_;
  }));

  it('should do something', function () {
    expect(!!twitterfeed).toBe(true);
  });

});
