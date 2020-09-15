import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'}) // alt method to adding this service to the providers array in app.module
export class UserService {
    //activatedEmitter = new EventEmitter<boolean>(); 
    activatedEmitter = new Subject<boolean>(); 

    // Observable subscriptions are passive - they wrap callbacks, event. However subjects are active, can be triggered from outside the observer -- perfect for cross-component eventemitter / Dont need for @Output() - only use subjects to communicate cross components 

}
