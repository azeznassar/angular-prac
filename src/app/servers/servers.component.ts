import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // Element is typically used for components, not classes or attributes
  //selector: '[app-servers]',  -- To select by attribute: <div app-servers><div> instead of <app-servers></app-servers>
  //selector: '.app-servers', -- To select by class: <div class="app-servers"><div> instead of <app-servers></app-servers>
  template: `<app-server></app-server><app-server></app-server>`, // inline template instead of linking to html file  - Templates must be present for all components
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
