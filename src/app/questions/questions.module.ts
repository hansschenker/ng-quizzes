import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionsRoutingModule } from './questions-routing.module';
import { QuestionsComponent } from './questions.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionItemComponent } from './question-item/question-item.component';
import { QuestionFormComponent } from './question-form/question-form.component';


@NgModule({
  declarations: [
    QuestionsComponent,
    QuestionListComponent,
    QuestionItemComponent,
    QuestionFormComponent
  ],
  imports: [
    CommonModule,
    QuestionsRoutingModule
  ],
  exports: [
    QuestionListComponent,
    QuestionItemComponent,
    QuestionFormComponent
  ]
})
export class QuestionsModule { }
