import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'studforum';
  public logged: boolean = false
  ngOnInit() {
    let token = localStorage.getItem('token')
    if (token) this.logged = true
  }
  logout() {
    localStorage.clear()
    this.logged = false
  }
}
