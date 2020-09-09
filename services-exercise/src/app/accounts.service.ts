import { LoggingService } from "./logging.service";
import { Injectable } from "@angular/core";
import { EventEmitter } from "protractor";


@Injectable() //Added to services which are injecting another service
export class AccountsService {
    accounts = [
        {
            name: 'Master Account',
            status: 'active'
        },
        {
            name: 'Testaccount',
            status: 'inactive'
        },
        {
            name: 'Hidden Account',
            status: 'unknown'
        }
    ];


    //statusUpdated = new EventEmitter();


    constructor (private loggingService : LoggingService) {}

    addAccount(name: string, status: string) {
        this.accounts.push({name: name, status: status});
        this.loggingService.logStatusChange(status);
    }

    updateStatus(id : number, newStatus : string) {
        this.accounts[id].status = newStatus;
        this.loggingService.logStatusChange(newStatus)
    }
}