import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './home/home.page';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatListModule
  ]
})
export class HomeModule { }
