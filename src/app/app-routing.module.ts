import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { MyQuestionsComponent } from './my-questions/my-questions.component';
import { QuestionToggleComponent } from './question-toggle/question-toggle.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  {path: '', redirectTo: '/main-page', pathMatch: 'full'},
  {path: 'admin', component: AdminComponent},
  {path: 'main-page', component: MainComponent},
  {path: 'my-questions', component: MyQuestionsComponent},
  {path: 'ask-question', component: QuestionToggleComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
