import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../models/event';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  url = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.url + '/event');
  }

  deleteEvent(_id: string): Observable<string> {
    return this.http.delete(this.url + '/event/' + _id, {
      responseType: 'text',
    });
  }

  /*addEvent(user: User): Observable<string> {
    return this.http.post(this.url + '/event', user, {responseType: 'text'}) ;
  }

  getEvent(name: string): Observable<User> {
    return this.http.get<User>(this.url + '/event/' + name);
  }

  editEvent(name: string, user: User): Observable<string> {
    return this.http.put(this.url + '/event/' + name, user, {responseType: 'text'});
  }*/
}
