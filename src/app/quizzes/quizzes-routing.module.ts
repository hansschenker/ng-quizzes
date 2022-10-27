import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizFormComponent } from './quiz-form/quiz-form.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { QuizzesPage } from './quizzes.page';

const routes: Routes = [{ path: '', component: QuizzesPage, children: [
  { path: 'list', component: QuizListComponent },
  { path: 'form', component: QuizFormComponent },
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizzesRoutingModule { }
