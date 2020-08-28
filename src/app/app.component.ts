import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  disableTheButton = false;

  async doSomething() {
    console.log('hello');
    this.disableTheButton = true;
    try {
      await new Promise(resolve => {
        setTimeout(resolve, 3000);
      })
    } catch (e) {
      console.error(e);
    } finally {
      this.disableTheButton = false;
    }
  }
}
