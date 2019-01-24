/**
* Creation Date: 19/01/2019
* Author: Andreivan P. dos Santos
* <p/>
* Copyright 2019, COMPANY
* All rights are reserved. Reproduction in whole or part is
* prohibited without the written consent of the copyright owner.
*/


import { browser, element, by } from 'protractor';

export class LoginPage {
  email = element(by.id('user_email'));
  password = element(by.id('user_password'));
  signInButton = element(by.name('commit'));  
  async OpenBrowser(url: string) {
    await browser.get(url);
  }
}