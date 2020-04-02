import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IQuestions } from 'src/assets/interface/questions';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
private _url: string = 'assets/data/questions.json'
  constructor(private httpClient: HttpClient) { }
  getQuestions() :Observable<IQuestions[]> {
    return this.httpClient.get<IQuestions[]>(this._url)
  }
}
