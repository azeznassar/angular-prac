import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-server-form',
  templateUrl: './server-form.component.html',
  styleUrls: ['./server-form.component.css']
})
export class ServerFormComponent implements OnInit {
  // Want to make these two properties into events that I can emit
  //@Output() decorator to make it listenable from the outside (other components) - this is because I'm passing my events out of the component
  //Using @Output to: enable other components to listen to my own custom events, which are created with EventEmitter
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output("bpCreated") blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  //Can also create an alias for the event outside the component e.g. access by app component via bpCreated now instead of blueprintCreated



  //Recap: @INPUT = make your properties bindable from the outside (parent components)
  // meanwhile @OUTPUT = allows parent components to listen to my own custom events created in this component
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer() {
    // emitting my own custom event and passing the data
    this.serverCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({serverName : this.newServerName, serverContent: this.newServerContent});
  }

}
