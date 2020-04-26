import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, VirtualTimeScheduler } from 'rxjs';
import { IQuestions } from 'src/assets/interface/questions';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  private _url: string = 'http://localhost:8000/api/questions/'

  httpHeaders = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private httpClient: HttpClient) { }
  getQuestions() :Observable<IQuestions[]> {
    return this.httpClient.get<IQuestions[]>(this._url)
  }

  create(question): Observable<IQuestions> {
    return this.httpClient.post<IQuestions>(this._url, question, this.httpHeaders)
  }

  giveAnswer(answer): Observable<any> {
    return this.httpClient.post<any>('http://localhost:8000/api/answers/', answer, this.httpHeaders)
  }

  getAnswers(): Observable<any[]> {
    return this.httpClient.get<any[]>('http://localhost:8000/api/answers/')
  }

  onLike(id): Observable<any> {
    return this.httpClient.put<any>(this._url + id + '/', this.httpHeaders)
  }
}
