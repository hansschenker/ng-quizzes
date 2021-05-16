import { QuizzListComponent } from './quizz-list/quizz-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// quizzes
import { QuizzesRoutingModule } from './quizzes-routing.module';
import { QuizzesComponent } from './quizzes.component';
import { QuizzItemComponent } from './quizz-item/quizz-item.component';
import { QuizzFormComponent } from './quizz-form/quizz-form.component';
import { QuizzTestComponent } from './quizz-test/quizz-test.component';
import { QuizzQuestionComponent } from './quizz-question/quizz-question.component';


@NgModule({
  declarations: [
    QuizzesComponent,
    QuizzListComponent,
    QuizzItemComponent,
    QuizzFormComponent,
    QuizzTestComponent,
    QuizzQuestionComponent
  ],
  imports: [
    CommonModule,
    QuizzesRoutingModule
  ],
  exports: [
    QuizzListComponent,
    QuizzItemComponent,
    QuizzFormComponent,
    QuizzTestComponent,
    QuizzQuestionComponent
  ]
})
export class QuizzesModule { }
