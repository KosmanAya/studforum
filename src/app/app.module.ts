import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http'
import { MyQuestionsComponent } from './my-questions/my-questions.component';
import { QuestionCardComponent } from './question-card/question-card.component';
import { QuestionToggleComponent } from './question-toggle/question-toggle.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MyQuestionsComponent,
    QuestionCardComponent,
    QuestionToggleComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
