import { Component } from '@angular/core';
import { Conference } from './participant.model';
import { ConferenceService } from './service/conference.service'
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Conferences';
  time: number = 10_000;

  constructor() {
    let interval = setInterval(() => {
      this.time--
      if (this.time === 0) {
        alert('Time is up!');
        clearInterval(interval)
      }
    }, 1000)
  }
}
