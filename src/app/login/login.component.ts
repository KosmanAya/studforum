import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginModel = {username: '', password: ''}
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(): void {
    this.userService.Login(this.loginModel).subscribe(res => {
      localStorage.setItem('token', res.token)
      localStorage.setItem('username', this.loginModel.username)
      this.router.navigate(['/main-page'])
    })
  }
}
