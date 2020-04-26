import { Injectable } from '@angular/core';
import { IQuestions } from '../assets/interface/questions'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private url = 'http://localhost:8000/api/admin/'
  headers = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }
  constructor(private http: HttpClient) { }

  deleteQuestion(question): Observable<IQuestions> {
    return this.http.delete<IQuestions>(this.url + question + '/')
  }
}
