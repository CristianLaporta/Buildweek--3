import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
 hide = true;
  @ViewChild('f') form!: NgForm;
  error = false;
  errorstring= "";


  constructor(private authService: AuthService, private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.Login(this.form.value).subscribe(
      resp => {
        this.error = this.authService.error ;
        this.errorstring = this.authService.errorstring;
   
        if ( this.authService.errorstring != ""){
          this.openSnackBar(this.authService.errorstring)

        }else{
          this.router.navigate(['./home']);
        }
      },
    
    )
    
    }
  openSnackBar(message: string) {
    this._snackBar.open(message, "OK");
  }

  redirect() {
    this.router.navigate(['./signup']);
  }
}
