import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss']
})
export class SignupPage implements OnInit {

  @ViewChild('f') form!: NgForm;
  error = undefined;
  hide = true;
  constructor(
    private authService: AuthService,
    private router: Router,
     private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  onSubmit() {
    //console.log(this.form.value)
    this.authService.signup(this.form.value).subscribe(
      resp => {
        console.log(resp);
        this.error = undefined;
        this.router.navigate(['/login'])
      },
      err  => {
        this.openSnackBar(err.error)
      }
    )
  }
  openSnackBar(message: string) {
    this._snackBar.open(message, "Riprovo");
  }

}
