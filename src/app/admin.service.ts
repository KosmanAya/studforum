import { Injectable } from '@angular/core';
import { IQuestions } from '../assets/interface/questions'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private url = '/api/admin/'
  headers = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }
  constructor(private http: HttpClient) { }

  deleteQuestion(question: IQuestions): Observable<IQuestions> {
    let url = this.url + 'question/' + question.id + '/'
    return this.http.delete<IQuestions>(url, this.headers)
  }
}
