import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizzesRoutingModule } from './quizzes-routing.module';
import { QuizzesPage } from './quizzes.page';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { QuizListitemComponent } from './quiz-listitem/quiz-listitem.component';
import { QuizFormComponent } from './quiz-form/quiz-form.component';
import { QuizDetailsComponent } from './quiz-details/quiz-details.component';


@NgModule({
  declarations: [
    QuizzesPage,
    QuizListComponent,
    QuizListitemComponent,
    QuizFormComponent,
    QuizDetailsComponent
  ],
  imports: [
    CommonModule,
    QuizzesRoutingModule
  ],
  exports: [
    QuizzesPage,
    QuizListComponent,
    QuizListitemComponent,
    QuizFormComponent,
    QuizDetailsComponent
  ]
})
export class QuizzesModule { }
