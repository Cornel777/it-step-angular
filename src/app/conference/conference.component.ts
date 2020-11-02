import { Component, Input, OnInit } from '@angular/core';
import { Participant} from '../participant.model';

@Component({
  selector: 'app-conference',
  templateUrl: './conference.component.html',
  styleUrls: ['./conference.component.css']
})
export class ConferenceComponent implements OnInit {

  @Input()
  name: String
  @Input()
  description:String
  @Input()
  location: String
  @Input()
  startingTime: Date
  @Input()
  capacity: number
  @Input()
  isOdd?: boolean
  @Input()
  isFirst?: boolean
  @Input()
  isLast?: boolean
  participants: Array<Participant>
  passed: boolean
  capacityLevel: string
  
  constructor() { 
    this.capacity = 3;
    this.participants = new Array();
  
  }

  ngOnInit(): void {
    this.passed = this.startingTime < new Date()
    console.log('is odd', this.isOdd)
  }

  availableSeats(): String{
    return `${this.capacity - this.participants.length} / ${this.capacity}`
  }

  addParticipant(){
    if (this.participants.length == this.capacity) {
      this.capacityLevel = 'full'
    }  else if (this.participants.length > this.capacity * 0.5) {
      this.capacityLevel = 'moderate'
      this.participants.push(new Participant())
    } else {
      this.capacityLevel = 'free'
      this.participants.push(new Participant())
    } 
  }

  cardStyle(){
    if (this.isFirst) return "text-white bg-success"
    if (this.isLast) return "text-white bg-dark"
    if (this.isOdd) return "text-white bg-secondary"
  }
}

