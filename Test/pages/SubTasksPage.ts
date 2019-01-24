/**
* Creation Date: 18/01/2019
* Author: Andreivan P. dos Santos
* <p/>
* Copyright 2019, COMPANY
* All rights are reserved. Reproduction in whole or part is
* prohibited without the written consent of the copyright owner.
*/

import { element, by } from "protractor";

export class SubTasksPage {
    subTaskDescription = element(by.id("new_sub_task"));
    dueDate = element(by.id("dueDate"));
    addSubTask = element(by.id("add-subtask"));
    firstSubTaskToDo = element(by.xpath("/html/body/div[4]/div/div/div[2]/div[2]/table/tbody/tr[1]/td[2]/a"));    
    closeScreen = element(by.buttonText("Close"));
    editSubTaskSave = element(by.className("editable-buttons"));
    subTaskDesc = element(by.xpath("/html/body/div[4]/div/div/div[2]/div[2]/table/tbody/tr[1]/td[2]/a"));
    editSubTaskDesc = element(by.xpath("/html/body/div[4]/div/div/div[2]/div[2]/table/tbody/tr[1]/td[2]/form/div/input"));
    //subTaskDesc = element(by.className('ng-scope ng-binding editable editable-click editable-hide'));
}