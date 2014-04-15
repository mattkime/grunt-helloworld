/*
 * helloworld
 * https://github.com/meetup/grunt-helloworld
 *
 * Copyright (c) 2014 Matthew Kime
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function ( grunt ) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask( 'helloworld', 'prints hello world', function () {
	grunt.log.writeln( "hello world" );
  });

};
