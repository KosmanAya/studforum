import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpModel = {
    name: '',
    username: '',
    password: '',
    password2: ''
  }
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  onSignUp(): void {
    console.log(this.signUpModel)
    this.userService.Reguster(this.signUpModel)
  }
}
