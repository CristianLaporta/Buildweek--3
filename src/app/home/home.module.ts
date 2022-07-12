import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './home/home.page';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class HomeModule { }
