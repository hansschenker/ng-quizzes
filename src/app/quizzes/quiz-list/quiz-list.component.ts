import { QuizService } from './../quiz.service';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Quiz } from '../quiz.types';

@Component({
  selector: 'quiz-list',
  template: `
      <ng-container *ngIf="quizzes">
        <h2>Quiz List</h2>
        <hr/>
        <ul>
          <li  *ngFor="let quiz of quizzes"><a [routerLink]="'../details/'+ quiz.id">
            {{quiz.title}}
          </a></li>
        </ul>
      </ng-container>
  `,
  styles: [
    `
    :host {
      background-color: cyan;
    }
    ul {
      list-style: none;
      margin: 0;
    }
    li > a {
      text-decoration: none;
    }
    li:hover {
      background-color: #f5f5f5;
      text-decoration: underline;
    }
    h2 {
      text-align: center
    }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuizListComponent implements OnInit {
  quizzes: Quiz[] = [];
  // @Input() quizzes!: Quiz[]
  constructor(private svc:QuizService) { }

  ngOnInit(): void {
    this.quizzes = this.svc.getQuizzes();
    console.log("quizzes page:",this.quizzes);
  }

}
