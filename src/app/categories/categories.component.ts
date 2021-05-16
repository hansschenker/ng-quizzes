import { MatToolbarModule } from '@angular/material/toolbar';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hs-categories',
  template: `
    <p>
      <mat-toolbar  color="primary">

        categories works!
      </mat-toolbar>
      
      <router-outlet></router-outlet>
    </p>
  `,
  styles: [
  ]
})
export class CategoriesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
