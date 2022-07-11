import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CoreModule } from '../core/core.module';
import { AppRoutingModule } from '../app-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class HeaderModule { }
