import { Component, OnInit, Output } from '@angular/core';
import { Conference } from '../participant.model';
import {EventEmitter } from '@angular/core';
import { ConferenceService } from '../service/conference.service';

@Component({
  selector: 'app-add-conf',
  templateUrl: './add-conf.component.html',
  styleUrls: ['./add-conf.component.css']
})
export class AddConfComponent implements OnInit {

  @Output()
  emitter: EventEmitter<void> = new EventEmitter()
  conference: Conference
  constructor(private conferenceService: ConferenceService) { }

  ngOnInit(): void {
    this.conference = new Conference();
  }

  addConference() {
    this.conferenceService.addConf(this.conference)
    this.emitter.emit();
  }

}
