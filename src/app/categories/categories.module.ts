import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// material library
import {MaterialLibraryModule } from "../shared/material-library/material-library.module";
import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { CategeoryListComponent } from './categeory-list/categeory-list.component';
import { CategeoryFormComponent } from './categeory-form/categeory-form.component';
import { CategeoryItemComponent } from './categeory-item/categeory-item.component';


@NgModule({
  declarations: [
    CategoriesComponent,
    CategeoryListComponent,
    CategeoryFormComponent,
    CategeoryItemComponent
  ],
  imports: [
    CommonModule,
    MaterialLibraryModule,
    CategoriesRoutingModule
  ],
  exports: [
    CategeoryListComponent,
    CategeoryFormComponent,
    CategeoryItemComponent
  ]
})
export class CategoriesModule { }
