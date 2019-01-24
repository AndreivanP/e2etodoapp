/**
* Creation Date: 19/01/2019
* Author: Andreivan P. dos Santos
* <p/>
* Copyright 2019, COMPANY
* All rights are reserved. Reproduction in whole or part is
* prohibited without the written consent of the copyright owner.
*/

import { Given, When, Then, setDefaultTimeout } from "cucumber";
import { HomePage } from "../pages/HomePage";
import { browser, protractor } from "protractor";
import { TasksPage } from "../pages/TasksPage";
import { expect } from "chai";


const randomstring = require("randomstring");
const homePage = new HomePage();
const taskPage = new TasksPage();

const string250 = randomstring.generate(250);
const string251 = randomstring.generate(251);

setDefaultTimeout(75000);

Given('I\'m on the my tasks list', async () => {    
    await homePage.myTasks.click();
});

Given('I type the task description {string}', async (descriptionTask) => {
    await taskPage.taskDescription.sendKeys(descriptionTask);
});

Given('I type a description with 250 characteres', async () => {        
    await taskPage.taskDescription.sendKeys(string250);
});

Given('I type a description with 251 characteres', async () => {        
    await taskPage.taskDescription.sendKeys(string251);
});

When('I hit the button add', async () => {
    await taskPage.addTask.click();
});

When('I press the enter key', async () => {
    await taskPage.taskDescription.sendKeys(protractor.Key.ENTER);
});

When('remove the created task', async () => {
    await taskPage.removeTask.click();
});

Then('it should properly save the task {string}', async (descriptionTaskCreated) => {
    expect (await taskPage.firstTaskToDo.getText()).to.equal(descriptionTaskCreated)
});

Then('it should properly save the task with 250 characteres', async () => {
    expect (await taskPage.firstTaskToDo.getText()).to.equal(string250)
});

Then('it should properly shows a message not allowing to save the task', async () => {
    //Waiting for the fix of the bug 6521 and 6522
});

Then('the task {string} should properly be removed', async (taskDescCreated) => {
    expect (await taskPage.firstTaskToDo.getText()).to.be.not.equal(taskDescCreated)
});

