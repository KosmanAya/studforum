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
    text: '',
    author: ''
  }

  constructor(private questionService: QuestionsService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    let user = localStorage.getItem('username')
    this.questionModel.author = user
    this.questionService.create(this.questionModel).subscribe()
  }

}
