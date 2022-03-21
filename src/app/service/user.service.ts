import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url + '/user');
  }

  deleteUser(name: string): Observable<string> {
    return this.http.delete(this.url + '/user/' + name, {
      responseType: 'text',
    });
  }

  addUser(user: User): Observable<string> {
    return this.http.post(this.url + '/user', user, { responseType: 'text' });
  }

  getUser(name: string): Observable<User> {
    return this.http.get<User>(this.url + '/user/' + name);
  }

  editUser(name: string, user: User): Observable<string> {
    return this.http.put(this.url + '/user/' + name, user, {
      responseType: 'text',
    });
  }
}
