import { Component } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //providers: [LoggingService] // Service injected into component 
})
export class NewAccountComponent {

  constructor(private loggingService: LoggingService, private accountsService: AccountsService) { // Service injected into component as a property (Angular creating instance of the class for me)
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus)
  }
}
