import { Component } from '@angular/core';
import { Conference } from './participant.model';
import {ConferenceService } from './service/conference.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Conferences';
  time: number = 10_000;
  searchField: string
  conferences: Array<Conference>
  isFormVisible = false
  
  constructor(private conferenceService: ConferenceService) {
    this.conferences = this.conferenceService.getAll()
    let interval = setInterval(() => {
      this.time--
      if (this.time === 0) {
        alert('Time is up!');
        clearInterval(interval)
      }
    }, 1000)
  }

 search() {
   this.conferences = this.conferenceService.search(this.searchField)
 }

  showForm() {
    this.isFormVisible = true;
  }

  addConf() {
    this.isFormVisible = false;
  }

}
