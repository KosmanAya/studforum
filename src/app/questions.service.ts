import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, VirtualTimeScheduler } from 'rxjs';
import { IQuestions } from 'src/assets/interface/questions';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  private _url: string = 'assets/data/questions.json'

  httpHeaders = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private httpClient: HttpClient) { }
  getQuestions() :Observable<IQuestions[]> {
    return this.httpClient.get<IQuestions[]>(this._url)
  }

  create(question): Observable<IQuestions> {
    // let url = this._url
    return this.httpClient.post<IQuestions>(this._url, question, this.httpHeaders)
  }
}
