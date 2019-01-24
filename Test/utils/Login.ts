/**
* Creation Date: 19/01/2019
* Author: Andreivan P. dos Santos
* <p/>
* Copyright 2019, COMPANY
* All rights are reserved. Reproduction in whole or part is
* prohibited without the written consent of the copyright owner.
*/

import { LoginPage } from "../pages/LoginPage";
import { config } from '../steps/config';

const login = new LoginPage();


export class Login {
    async performLogin(email, password){
        await login.OpenBrowser(config.baseUrl + "users/sign_in");
        await login.email.sendKeys(email);
        await login.password.sendKeys(password);
        await login.signInButton.click();
    }
}