# dash [![Build Status](https://travis-ci.org/editor/dash.png?branch=master)](https://travis-ci.org/editor/dash) [![Coverage Status](https://coveralls.io/repos/editor/dash/badge.png)](https://coveralls.io/r/editor/dash)

A cookie-sized JavaSript library wrapping the IndexedDB "HTML5" database API.

#### Key Features
* Simpified callbacks through promises
* Transaction and optionally version-free 
* Declarative databases, object stores and indexes
* 4KB gzipped (15KB uncompressed)

#### Installation Options

* Download the [lastest build](https://raw.github.com/editor/dash/master/lib/dash.js)
* Install via [bower](https://github.com/bower/bower): `bower install dash`

#### Up And Running

	/* There's no setup required to get started using IndexedDB with dash. */
	/* Just start adding entries and any declared databases, object stores and 
	 * indexes will be provided */
	dash.add.object({ database: 'foo', store: 'bar', data: { baz: new Date().getTime() } )
		(function(add_context) {
			dash.get.object(add_context)
				(function(get_context) {
					console.log('Data', get_context.entry)
				});
		});

### Development Features

* Free (MIT Licensed)
* [Task-based](http://gruntjs.com/) Development Workflow
* [Automated](https://github.com/karma-runner/karma) [Jasmine](http://pivotal.github.io/jasmine/) [Testing](https://github.com/karma-runner/karma-jasmine) 
* [Coverage](https://github.com/gotwarlost/istanbul) [Testing](https://github.com/karma-runner/karma-coverage)
* Continuous [Integration](http://travis-ci.org/editor/dash) and [Coverage](https://github.com/cainus/node-coveralls) Reporting

#### Documention

[http://dashdb.com/#/docs](http://dashdb.com/#/docs)

#### Demos

[http://dashdb.com/#/demos](http://dashdb.com/#/demos)

#### License

[http://dashdb.com/#/about](http://dashdb.com/#/about)
