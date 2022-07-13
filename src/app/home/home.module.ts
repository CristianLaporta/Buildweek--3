import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './home/home.page';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { VideobannerComponent } from './videobanner/videobanner.component';
import {MatButtonModule} from '@angular/material/button';
import { CardComponent } from './home/card/card.component';
@NgModule({
  declarations: [
    HomePage,
    VideobannerComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule
  ]
})
export class HomeModule { }
