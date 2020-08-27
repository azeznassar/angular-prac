import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // Element is typically used for components, not classes or attributes
  //selector: '[app-servers]',  -- To select by attribute: <div app-servers><div> instead of <app-servers></app-servers>
  //selector: '.app-servers', -- To select by class: <div class="app-servers"><div> instead of <app-servers></app-servers>
  //template: `<app-server></app-server><app-server></app-server>`, // inline template instead of linking to html file  - Templates must be present for all components
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created";
  serverName = "Testserver";

  constructor() { 

    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = "Server was created! The name is " + this.serverName;


  }

  OnUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
