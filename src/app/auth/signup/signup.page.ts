import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ISignupData } from '../interfaces/isignup-data';

@Component({
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  selector: 'form-field-prefix-suffix-example',
})
export class SignupPage implements OnInit {

  @ViewChild('f') form!: NgForm;
  error = undefined;
  hide = true;

  firstFormGroup = this._formBuilder.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private authService: AuthService,
    private router: Router,
    private _snackBar: MatSnackBar,
    private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {

  }
  openSnackBar(message: string) {
    this._snackBar.open(message, "Riprovo");
  }

  redirect() {
    this.router.navigate(['./login']);
  }
}
