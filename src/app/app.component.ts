import { Component } from '@angular/core';
import { Conference, Participant } from './participant.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Conferences';
  time: number = 10_000;
  searchField: string
  filteredConferences: Array<Conference>
  isFormVisible = false
  conferences: Array<Conference> = [
    {
      name: "ngConf",
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      location: "Amsterdam",
      startingTime: new Date(2019, 3, 12, 12, 12, 30),
      capacity: 100
    },
    {
      name: "DevCamp",
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      location: "Amsterdam",
      startingTime: new Date(2021, 3, 12, 12, 12, 30),
      capacity: 10
    },
    {
      name: "WebSummit",
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      location: "Porto",
      startingTime: new Date(2021, 3, 12, 12, 12, 30),
      capacity: 10
    },
    {
      name: "WebSummit",
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      location: "Porto",
      startingTime: new Date(2021, 3, 12, 12, 12, 30),
      capacity: 10
    }
  ]
  constructor() {
    this.filteredConferences = this.conferences;
    let interval = setInterval(() => {
      this.time--
      if (this.time === 0) {
        alert('Time is up!');
        clearInterval(interval)
      }
    }, 1000)
  }

  search() {
    if (this.searchField) {
      this.filteredConferences = this.conferences.filter((value) => {
        return value.location.includes(this.searchField) || value.name.includes(this.searchField)
      })
    } else {
      this.filteredConferences = this.conferences
    }
  }

  showForm() {
    this.isFormVisible = true;
  }

  addConf(conference: Conference) {
    this.conferences.push(conference)
    this.isFormVisible = false;
  }

}
