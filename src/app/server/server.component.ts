import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online {
            color: white;
        }
    `]
})
export class ServerComponent {
    serverId: number = 5;
    serverStatus: string = "offline";

    constructor() { // Built in method that every TS class has, which is called once the component is created
        this.serverStatus = Math.random() > 0.5 ? "online" : "offline";
    }

    getServerStatus() {
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus === "online" ? "green" : "red";
    }
}