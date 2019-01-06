import { Component } from '@angular/core';

@Component({
  selector: 'app-newPage-component',
  templateUrl: './newPage.component.html'
})
export class newPageComponent {
  public currentCount = "";
  public firstButtonName = "Start"
  public incrementCounter() {
    this.currentCount += "+";
    switch (this.firstButtonName) {
      case "Start": {
        this.firstButtonName = "Loading..."
        break;
      }
      case "Loading...": {
        this.firstButtonName = "Stop"
        break;
      }
      case "Stop": {
        this.firstButtonName = "Loading..."
        break;
      }
    }
  }
}
