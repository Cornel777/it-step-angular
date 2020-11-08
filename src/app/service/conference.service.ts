import { Injectable } from '@angular/core';
import { Conference } from '../participant.model'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConferenceService {
  private URL = "http://localhost:3000/conferences"
  constructor(private http: HttpClient) { }

  search(searchField: string): Observable<Conference[]> {
    return this.http.get<Conference[]>(`${this.URL}?q=${searchField}`)
  }

  findById(id: string): Observable<Conference> {
    return this.http.get<Conference>(`${this.URL}/${id}`)
  }

  getAll(): Observable<Conference[]> {
    return this.http.get<Conference[]>(this.URL)
  }

  addConf(conference: Conference): Observable<any> {
    return this.http.post(this.URL, conference)
  }
}
