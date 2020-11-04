import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Conferences';
  time = 4000;

  constructor(){
    let interval = setInterval(() =>{ 
      this.time--
      if (this.time == 0) {
        alert('Time is up!')
        clearInterval(interval)
      }
    }, 1000)
  }
}
