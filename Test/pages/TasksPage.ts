/**
* Creation Date: 19/01/2019
* Author: Andreivan P. dos Santos
* <p/>
* Copyright 2019, COMPANY
* All rights are reserved. Reproduction in whole or part is
* prohibited without the written consent of the copyright owner.
*/

import { element, by } from "protractor";

export class TasksPage {
    taskDescription = element(by.id("new_task"));
    addTask = element(by.className("input-group-addon glyphicon glyphicon-plus"));
    firstTaskToDo = element.all(by.className("ng-scope ng-binding editable editable-click")).first();
    firstManageSubTask = element.all(by.className("btn btn-xs btn-primary ng-binding")).first();
    firstTaskTitle = element.all(by.buttonText("(1) Manage Subtasks"));
    removeTask = element.all(by.className("btn btn-xs btn-danger")).first();
}