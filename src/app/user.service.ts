import { Injectable } from '@angular/core';
import { User } from './IUser'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'http:localhost:8000/api/user/'
  private httpHeaders = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  Login(user: User): Observable<User> {
    const url = this.url + 'login/'
    return this.http.post<User>(url, user, this.httpHeaders)
  }

  Reguster(user: User): Observable<User> {
    const url = this.url + 'register/'
    return this.http.post<User>(url, user, this.httpHeaders)
  }
}
