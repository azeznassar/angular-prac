import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  //encapsulation: ViewEncapsulation.None  -- use this make styles defined inside this component global // Native, Emulated (Emulated is default)
})
export class ServerElementComponent implements OnInit {
  //Hot to bind to our own custom properties:
  // By default all properties are only accessable/not bindable from outside the component.
  // Need the @Input() decorator to access this property outside of this component (aka from parent component)
  // With @Input(): this property is accessable to the outside world so any parent component can bind to it
  @Input("svrElement") element: { type: string, name: string, content: string }; // property initalization
  // srvElement is an alias (dont need to add an alias) - allows the property to be accessed by it's alias name instead of internal property name
  constructor() { }

  ngOnInit(): void {
  }

}
