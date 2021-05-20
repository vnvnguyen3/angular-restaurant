import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<any>("http://localhost:8080/users")
  }

  addUser(user: User): Observable<User> {
    return this.http.post<any>("http://localhost:8080/add/user", JSON.stringify(user), this.httpOptions);
  }
}