import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './home/home.page';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { VideobannerComponent } from './videobanner/videobanner.component';
import {MatButtonModule} from '@angular/material/button';
import { CardComponent } from './home/card/card.component';
import { SidebarComponent } from './sidebar/sidebar/sidebar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatRadioModule} from '@angular/material/radio';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    HomePage,
    VideobannerComponent,
    CardComponent,
    SidebarComponent

  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    MatSidenavModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ]
})
export class HomeModule { }
