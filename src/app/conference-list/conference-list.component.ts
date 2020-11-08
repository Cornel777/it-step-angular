import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Conference } from '../participant.model';
import { ConferenceService } from '../service/conference.service'

@Component({
  selector: 'app-conference-list',
  templateUrl: './conference-list.component.html',
  styleUrls: ['./conference-list.component.css']
})
export class ConferenceListComponent implements OnInit {

  searchField: string
  conferences: Conference[]
  isFormVisible = false

  constructor(private conferenceService: ConferenceService, private router: Router) { 
    this.conferenceService.getAll().subscribe(data => {
      this.conferences = data
    })
  }

  ngOnInit(): void {
  }

  search() {
    if (this.searchField) {
      this.conferenceService.search(this.searchField).subscribe(data => {
        this.conferences = data
      })
    } else {
      this.conferenceService.getAll().subscribe(data => {
        this.conferences = data
      })
    }
  }

  showForm() {
    this.router.navigate(['add'])
  }

  addConf() {
    this.isFormVisible = false;
    this.conferenceService.getAll().subscribe(data => {
      this.conferences = data
    })
  }

}
