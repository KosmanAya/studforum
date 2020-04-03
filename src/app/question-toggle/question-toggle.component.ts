import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-question-toggle',
  templateUrl: './question-toggle.component.html',
  styleUrls: ['./question-toggle.component.css']
})
export class QuestionToggleComponent implements OnInit {

  questionModel = {
    title: '',
    text: ''
  }

  constructor(private questionService: QuestionsService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.questionModel)
    this.questionService.create(this.questionModel)
  }

}
