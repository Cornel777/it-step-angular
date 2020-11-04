export interface IParticipant{
    firstName: String,
    lastName: String,
    age: number,
    technologies: Array<String>
}

export class Participant implements IParticipant {
    firstName: String
    lastName: String
    age: number
    technologies: Array<String>
}

export class Conference {
  name: String
  description:String
  location: String
  startingTime: Date
  capacity: number
}