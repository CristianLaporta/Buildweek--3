import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPage } from './login/login.page';
import { SignupPage } from './signup/signup.page';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    LoginPage,
    SignupPage
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MatDividerModule,
    MatListModule,
    MatFormFieldModule,
    MatSliderModule ,
    MatButtonModule ,
    MatInputModule,
    MatStepperModule,
    MatIconModule,
    MatCardModule,
    MatSnackBarModule
  ]
})
export class AuthModule { }
