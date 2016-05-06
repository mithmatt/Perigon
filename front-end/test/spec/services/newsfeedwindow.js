'use strict';

describe('Service: newsfeedwindow', function () {

  // load the service's module
  beforeEach(module('frontEndApp'));

  // instantiate service
  var newsfeedwindow;
  beforeEach(inject(function (_newsfeedwindow_) {
    newsfeedwindow = _newsfeedwindow_;
  }));

  it('should do something', function () {
    expect(!!newsfeedwindow).toBe(true);
  });

});
