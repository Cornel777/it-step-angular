import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ConferenceService } from '../service/conference.service';
import { Conference } from '../participant.model'
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-conference-details',
  templateUrl: './conference-details.component.html',
  styleUrls: ['./conference-details.component.css']
})
export class ConferenceDetailsComponent implements OnInit {

  conference$: Observable<Conference>
  description$: Observable<String>
  conference: Conference
  constructor(private activatedRoute: ActivatedRoute, private conferenceService: ConferenceService) {
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    this.conference$ = this.conferenceService.findById(id)
    this.description$ = this.conference$.pipe(map(result => result.description));
    this.conference$.subscribe(data => this.conference = data)
   }

  ngOnInit(): void {
  }

}
