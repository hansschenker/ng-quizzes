import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <ng-container>

      <ul>
        <li><a routerLink="/quizzes">Quizzes</a></li>
        <li><a routerLink="/">Home</a></li>
      </ul>
      <router-outlet></router-outlet>
    </ng-container>
  `,
  styles: [
    `
    :host {
      margin: 0 auto;
      display: flex;
      background-color: #f5f5f5;
      height: 100vh;
      width: 640px;
    }
    `
  ]
})
export class AppComponent {
  title = 'ng-quizzes';
}
