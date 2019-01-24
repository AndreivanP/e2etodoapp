/**
* Creation Date: 18/01/2019
* Author: Andreivan P. dos Santos
* <p/>
* Copyright 2019, COMPANY
* All rights are reserved. Reproduction in whole or part is
* prohibited without the written consent of the copyright owner.
*/

import { HomePage } from "../pages/HomePage";
import { TasksPage } from "../pages/TasksPage";
import { SubTasksPage } from "../pages/SubTasksPage";

const homePage = new HomePage();
const taskPage = new TasksPage();
const subtaskPage = new SubTasksPage();

export class CreateTask {
    async createSimpleTaskAndGoToSubTask(taskDesc){
        await homePage.myTasks.click();
        await taskPage.taskDescription.sendKeys(taskDesc);
        await taskPage.addTask.click();
        await taskPage.firstManageSubTask.click();       
    }

    async createSimpleTaskAndSubTask(taskDesc, subTaskDesc){
        await homePage.myTasks.click();
        await taskPage.taskDescription.sendKeys(taskDesc);
        await taskPage.addTask.click();
        await taskPage.firstManageSubTask.click(); 
        await subtaskPage.subTaskDescription.sendKeys(subTaskDesc);
        await subtaskPage.addSubTask.click();
    }
}