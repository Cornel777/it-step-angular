import { Injectable } from '@angular/core';
import { Conference } from '../participant.model'

@Injectable({
  providedIn: 'root'
})
export class ConferenceService {
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

  constructor() { }

  search(searchField: string) {
    return this.conferences.filter((value) => {
      return value.location.includes(searchField) || value.name.includes(searchField)
    })
  }

  getAll(): Array<Conference> {
    return this.conferences;
  }

  addConf(conference: Conference) {
    this.conferences.push(conference)
  }
}
