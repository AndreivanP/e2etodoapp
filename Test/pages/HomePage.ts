/**
* Creation Date: 19/01/2019
* Author: Andreivan P. dos Santos
* <p/>
* Copyright 2019, COMPANY
* All rights are reserved. Reproduction in whole or part is
* prohibited without the written consent of the copyright owner.
*/


import { browser, element, by } from 'protractor';

export class HomePage {
    myTasks = element(by.className('btn btn-lg btn-success'));
    logoutBtn = element(by.xpath("/html/body/div[1]/div[1]/div/div[2]/ul[2]/li[2]/a"));
}