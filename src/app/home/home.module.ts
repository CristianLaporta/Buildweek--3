import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './home/home.page';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { VideobannerComponent } from './videobanner/videobanner.component';

@NgModule({
  declarations: [
    HomePage,
    VideobannerComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatListModule
  ]
})
export class HomeModule { }
