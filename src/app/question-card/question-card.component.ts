import { Component, OnInit, Input } from '@angular/core';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.css']
})
export class QuestionCardComponent implements OnInit {
  @Input() question: any
  constructor(private questionService: QuestionsService) { }
  public answers = []
  answerModel = {
    text: '',
    id: 0,
    author: ''
  }
  ngOnInit(): void {
    this.questionService.getAnswers().subscribe(
      data => {
        this.answers = data
      }
    )
  }

  onLike(id) {
    this.questionService.onLike(id).subscribe()
  }
  answer(id) {
    this.answerModel.id = id
    this.answerModel.author = localStorage.getItem('username')
    this.questionService.giveAnswer(this.answerModel).subscribe()
  }
  
}
