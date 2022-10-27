import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'hs-quizzes',
  template: `
    
    <ng-container >

      <ul>
        <li><a routerLink="list">Show Quizzes</a></li>
        <li><a routerLink="form">Add a Quizz</a></li>
      </ul>
      <router-outlet></router-outlet>
    </ng-container>  
  `,
  styles: [
    `
    :host {
      display: flex;
      flex-direction: column;
      align-items: space-between;
      /* margin-left: 1rem; */
      background-color: yellow;
      width: 100%;
    }

    ul {
      margin-left: 1rem;
      list-style: none;
      marging-top: 2em;
      background-color: red;
    }
    li {
      display: inline-block;
      margin-right: 1em;
    }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuizzesPage implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
