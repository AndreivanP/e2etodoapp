/**
* Creation Date: 19/01/2019
* Author: Andreivan P. dos Santos
* <p/>
* Copyright 2019, COMPANY
* All rights are reserved. Reproduction in whole or part is
* prohibited without the written consent of the copyright owner.
*/

const { After, setDefaultTimeout } = require('cucumber');
import { browser } from 'protractor';
import { Before, Status } from 'cucumber';
import { Login } from '../Utils/Login';
import { HomePage } from '../pages/HomePage';

const homePage = new HomePage();

var user = 'andreivan.santos@gmail.com';
var password = 'asdf1234';

setDefaultTimeout(500000);

Before(async () => {
  let login = new Login();
  await login.performLogin(user, password);  
});

After(async function(scenarioResult) {
 if (scenarioResult.result.status === Status.FAILED) {
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, 'image/png');
  }
  await homePage.logoutBtn.click();
});
