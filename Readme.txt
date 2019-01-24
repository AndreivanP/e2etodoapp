======================================================================================================================================
WELCOME TO THE TODOAPP E2E AUTOMATION
======================================================================================================================================

This front end test automation project was built using the language TypeScript and the tools Protractor, Cucumber and Chai.

======================================================================================================================================

After clone the project in order to run you'll need the following prerequisites in your local environment: 

	- NodeJs version 8 or greater;
	- Protractor globally installed (npm install -g protractor);
	- The TypeScript globally installed (npm install -g typescript);

======================================================================================================================================

To build the test environment go to the root path of e2etodoapp and run npm install.

======================================================================================================================================

After that you need to build the project (Transpile the ts files to js) by tsc -w . At this point see that a js folder must be
automatically generated.

======================================================================================================================================

Then start the webdriver by webdriver-manager start

======================================================================================================================================

To start the test execution go to the directory e2etodoapp\Test\js\steps and run:

	- protractor config.js --cucumberOpts.tags="@regression"
	
======================================================================================================================================

After the test execution is finished a html report will be generated under the:

e2etodoapp\Test\js\steps\reports\html

======================================================================================================================================

Any extra information like supported tags can be found on the config.ts file



	