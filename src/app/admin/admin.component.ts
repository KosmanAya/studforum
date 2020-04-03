import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private questionsService: QuestionsService) { }
  public questions =[]
  ngOnInit(): void {
    this.questionsService.getQuestions()
      .subscribe(data => {
        this.questions = data
      })
  }

}
