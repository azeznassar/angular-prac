import { Component } from '@angular/core';


// Component D
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  // styles: [`
  //   h2 {
  //     color: dodgerblue;
  // }
  // `]
})
export class AppComponent {
  name = 'Azez';
  showMessage = false;
  log = []

  onToggleMessage() {
    this.showMessage = !this.showMessage;
    // this.log.push(this.log.length + 1)
    this.log.push(new Date())

  }
}
