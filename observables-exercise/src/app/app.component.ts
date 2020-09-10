import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from './user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  userActivated = false;
  private activatedSub: Subscription;

  constructor(private userService: UserService) {} // want to listen to the event inside this component so I inject the service to the component by binding it to a private property

  ngOnInit() {
    this.activatedSub = this.userService.activatedEmitter.subscribe(didAcivate => {
      this.userActivated = didAcivate
    })
  }

  ngOnDestroy() {
    this.activatedSub.unsubscribe()
  }
}
