/**
* Creation Date: 19/01/2019
* Author: Andreivan P. dos Santos
* <p/>
* Copyright 2019, COMPANY
* All rights are reserved. Reproduction in whole or part is
* prohibited without the written consent of the copyright owner.
*/

import { Given, When, Then, setDefaultTimeout } from "cucumber";
import { expect } from "chai";
import { GenerateData } from "../utils/GenerateData";
import { CreateTask } from "../utils/CreateTask";
import { SubTasksPage } from "../pages/SubTasksPage";
import { TasksPage } from "../pages/TasksPage";
import { browser } from "protractor";

const randomstring = require("randomstring");
const createTaskSub = new CreateTask();
const subtaskPage = new SubTasksPage();
const generateData = new GenerateData();
const taskPage = new TasksPage();

setDefaultTimeout(75000);

Given('I\'m on the create subtask screen', async () => { 
    let taskString = randomstring.generate(10);   
    await createTaskSub.createSimpleTaskAndGoToSubTask(taskString);     
});

Given('I type a subtask description with {string}', async (subtaskString) => {    
    await subtaskPage.subTaskDescription.sendKeys(subtaskString);
});

Given('I type a valid due date', async () => {
    let date = await generateData.generateValidDueDateFormat(+30);    
    await subtaskPage.dueDate.clear();    
    await subtaskPage.dueDate.sendKeys(date);
});

Given('I type a invalid due date', async () => {
    let date = await generateData.generateInvalidDueDateFormat(+30);    
    await subtaskPage.dueDate.clear();    
    await subtaskPage.dueDate.sendKeys(date);
});

Given('I\'m on the create subtask screen with an added subtask', async () => {
    let taskDesc = randomstring.generate(10); 
    let subTaskDesc = randomstring.generate(10); 
    await createTaskSub.createSimpleTaskAndSubTask(taskDesc, subTaskDesc);  
});

Given('I edit a subtask description to {string}', async (subtaskString) => { 
    await subtaskPage.subTaskDesc.click();  
    await subtaskPage.editSubTaskDesc.clear();     
    await subtaskPage.editSubTaskDesc.sendKeys(subtaskString);
});

When('I hit the button add subtask', async () => {         
    await subtaskPage.addSubTask.click();
});

When('I save the edition', async () => {         
    await subtaskPage.editSubTaskSave.click();
});

Then('it should save the subtask {string} and the button title must be {string}', async (subtaskDescCreated, btnTitle) => {    
    expect(await subtaskPage.firstSubTaskToDo.getText()).to.equal(subtaskDescCreated)
    await subtaskPage.closeScreen.click();
    await browser.refresh();
    expect(await taskPage.firstManageSubTask.getText()).to.equal(btnTitle);
});

Then('it should not save the subtask and the button title must be {string}', async (btnTitle) => {
    await subtaskPage.closeScreen.click();
    await browser.refresh();
    expect(await taskPage.firstManageSubTask.getText()).to.equal(btnTitle);   
});

Then('the subtask description should be {string}', async (subtaskDesc) => {
    expect(await subtaskPage.subTaskDesc.getText()).to.equal(subtaskDesc); 
    await subtaskPage.closeScreen.click();  
});