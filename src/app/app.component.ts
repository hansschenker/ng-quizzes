import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div class="wrapper">

      <div class="header">
        <h2 class="title">Angular Quizzes</h2>
        <h2>Login</h2>
      </div>
      <div class="page">
        <div class="main">    
          <ul class="main-nav">
            <li><a routerLink="/">Home</a></li>
            <li><a routerLink="/quizzes">Quizzes</a></li>
          </ul>
          <div class="main-content">
            <router-outlet></router-outlet>
          </div>
        </div>
      </div>
      <div>
        <p class="footer">Footer</p>
      </div>
    </div>
  `,
  styles: [
    `
    .header {
      display: flex;
      justify-content: space-around;
    }
    .wrapper {
      display: flex;
      flex-direction: column;

    width: 100%;
      background-color: #f5f5f5
    }
    .title {
      text-align: center;
    }
    .page {
      display: flex;
      flex-direction: row;
      background-color: #efefef;
      /* width: 100vh; */
    }
    .main {
      display: flex;
      flex-direction: row;
      /* border: 1px solid black; */
      width: 100%;
    }
    .main-nav{
      width: 20%;
      background-color:lightgrey;
      list-style: none;
      height: 80vh;
    }
    .main-nav li a {
      text-decoration: none;
    }
    .main-nav li a:hover {
      text-decoration: underline;
    }
    .main-content {
      width: 100%;
    }
    :host {
      margin: 0 auto;
      background-color: #f5f5f5;
      height: 100vh;
      width: 480px;
    }
    .footer {
      text-align: center;
    }
    `
  ]
})
export class AppComponent {
  title = 'angular quizzes';
}

