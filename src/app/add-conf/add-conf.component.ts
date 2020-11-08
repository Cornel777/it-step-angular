import { Component, OnInit, Output } from '@angular/core';
import { Conference } from '../participant.model';
import { EventEmitter } from '@angular/core';
import { ConferenceService } from '../service/conference.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-conf',
  templateUrl: './add-conf.component.html',
  styleUrls: ['./add-conf.component.css']
})
export class AddConfComponent implements OnInit {

  conference: Conference
  constructor(private conferenceService: ConferenceService, private router: Router) { }

  ngOnInit(): void {
    this.conference = new Conference();
  }

  addConference() {
    this.conferenceService.addConf(this.conference)
      .subscribe(() => this.router.navigate([""]));
  }

}
