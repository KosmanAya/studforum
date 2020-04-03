import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginModel = {email: '', password: ''}
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  onLogin(): void {
    console.log(this.loginModel)
    this.userService.Login(this.loginModel)
  }
}
