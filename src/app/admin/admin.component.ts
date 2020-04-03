import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private questionsService: QuestionsService, private adminService: AdminService) { }
  public questions =[]
  ngOnInit(): void {
    this.questionsService.getQuestions()
      .subscribe(data => {
        this.questions = data
      })
  }

  onDelete(question): void {
    console.log(question)
    this.adminService.deleteQuestion(question)
  }

}
