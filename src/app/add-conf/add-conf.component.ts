import { Component, OnInit, Output } from '@angular/core';
import { Conference } from '../participant.model';
import {EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-conf',
  templateUrl: './add-conf.component.html',
  styleUrls: ['./add-conf.component.css']
})
export class AddConfComponent implements OnInit {

  @Output()
  emitter: EventEmitter<Conference> = new EventEmitter()
  conference: Conference
  constructor() { }

  ngOnInit(): void {
    this.conference = new Conference();
  }

  addConference() {
    this.emitter.emit(this.conference);
  }

}
