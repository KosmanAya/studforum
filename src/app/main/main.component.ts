import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public questions = []
  constructor(private questionService: QuestionsService, private router: Router) { }

  ngOnInit(): void {
    this.questionService.getQuestions()
      .subscribe(data => {
        this.questions = data
      })
  }

  questionToggle() {
    this.router.navigate(['/ask-question/'])
  }

}
