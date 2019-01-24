/**
* Creation Date: 19/01/2019
* Author: Andreivan P. dos Santos
* <p/>
* 9, COMPANY
* All rights are reserved. Reproduction in whole or part is
* prohibited without the written consent of the copyright owner.
*/

import * as moment from 'moment';

var randomstring = require("randomstring");

export class GenerateData {
    async generateRandomString(size) {
        randomstring.generate(size);
    }

    async generateValidDueDateFormat(dayOffset: number) {
        var startDate = new Date();
        var newDay = startDate.getDate() + dayOffset;
        await startDate.setDate(newDay);
        return moment(startDate).format('MM/DD/YYYY');
    }

    async generateInvalidDueDateFormat(dayOffset: number) {
        var startDate = new Date();
        var newDay = startDate.getDate() + dayOffset;
        await startDate.setDate(newDay);
        return moment(startDate).format('DD/MM/YYYY');
    }
}

