import { QuizListComponent } from './quiz-list/quiz-list.component';
import { QuizService } from './quiz.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Quiz } from './quiz.types';

@Component({
  selector: 'hs-quizzes',
  template: `
    
    <ng-container >
      <ul>
        <li><a routerLink="list">Show Quizzes</a></li>
        <li><a routerLink="form">Add a Quiz</a></li>
        <li><a routerLink="search">Search Quiz</a></li>
      </ul>
      <!-- <pre>
        {{quizzes | json}}
      </pre> -->
      <!-- <quiz-list [quizzes]="quizzes"></quiz-list> -->
      <router-outlet></router-outlet>
    </ng-container>  
  <!-- <quiz-form></quiz-form> -->
  `,
  styles: [
    `
    :host {
      display: flex;
      flex-direction: column;
      background-color: yellow;
      /* width: 100%; */
    }
    /* ul.quizlist {
      background-color: #f5f5f5;
    } */
    /* ul.quizlist li {
      display: block;
    } */
    ul {
      margin-left: 1rem;
      list-style: none;
      marging-top: 2em;
      /* background-color: red; */
    }
    li {
      display: inline-block;
      margin-right: 1em;

    }
    li:hover {
      background-color: #f5f5f5;
      text-decoration: underline;
    }
    li a {
      text-decoration: none;
    }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuizzesPage implements OnInit {

  public quizzes: Quiz[]=[];
  constructor(private svc:QuizService) {

   }

  ngOnInit(): void {
    
    this.quizzes = this.svc.getQuizzes();
    console.log("quizzes page:",this.quizzes);
  }

}
