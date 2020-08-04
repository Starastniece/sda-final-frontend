'use strict';

describe('myApp.lecturers module', function() {

  beforeEach(module('myApp.lecturers'));

  describe('lecturers controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var lecturersCtrl = $controller('LecturersCtrl');
      expect(lecturersCtrl).toBeDefined();
    }));

  });
});
