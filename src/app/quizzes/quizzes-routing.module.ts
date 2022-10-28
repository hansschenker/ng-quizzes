import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizDetailsComponent } from './quiz-details/quiz-details.component';
// quizzes
import { QuizFormComponent } from './quiz-form/quiz-form.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { QuizSearchComponent } from './quiz-search/quiz-search.component';
import { QuizzesPage } from './quizzes.page';

const routes: Routes = [{ path: '', component: QuizzesPage, children: [
  { path: '', pathMatch: 'full', redirectTo: 'list' },
  { path: 'details/:id', component: QuizDetailsComponent },
  { path: 'list', component: QuizListComponent },
  { path: 'form', component: QuizFormComponent },
  { path: 'search', component: QuizSearchComponent },
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizzesRoutingModule { }
