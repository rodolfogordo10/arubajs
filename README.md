# arubajs [![Build Status](https://travis-ci.org/grupoapi/arubajs.svg?branch=master)](https://travis-ci.org/grupoapi/arubajs) [![Coverage Status](https://coveralls.io/repos/grupoapi/arubajs/badge.svg?branch=master)](https://coveralls.io/r/grupoapi/arubajs?branch=master) [![Dependency Status](https://david-dm.org/grupoapi/arubajs.svg)](https://david-dm.org/) [![Code Climate](https://codeclimate.com/github/grupoapi/arubajs/badges/gpa.svg)](https://codeclimate.com/github/grupoapi/arubajs)
Aruba JS is a Grupo API Angular Module containing common/basic features

## About ArubaJS

Aruba JS is an Angular JS module to help modern web apps development easier, providing common features like:

* logging
* exception handling
* configuration file-based application bootstrap.

## Installing ArubaJS
	bower install aruba.js

## Developer guide

All module development is based on node capabilities. After cloning  the repository, need to install node packages:

	npm install

Once there is a dependency of AngualrJS, bower is required in the system as well:

	npm install bower -g

To make development easier, several npm tasks/scripts are pre-configured:

* __npm test__: run all automated tests and check the code against jshint and jslint best practices.
* __npm run-script clean__: project folder cleaning.
* __npm run-script demo__: run demo app over a node web server using _gulp-serve_ module. The server publish the app on port 3000.
* __npm run-script build__: build entire project generating main assets into "dist" folder.
* __npm run-script release__: prepare package to be released. Works only after running "build" script.

## Documentation

Soon...

## License

The MIT License

Copyright (c) 2015 GrupoApi, Inc. http://grupoapi.net.br

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
