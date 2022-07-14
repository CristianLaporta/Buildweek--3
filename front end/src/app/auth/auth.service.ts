import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { IAuthData } from './interfaces/iauth-data';
import { ISignupData } from './interfaces/isignup-data';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  error= false;
  errorstring = "";
  helper = new JwtHelperService();
  authSubject = new BehaviorSubject<IAuthData | null>(null);
  private API = "https://socialcris.duckdns.org:8445";

  constructor(private http: HttpClient, private router: Router) {
    this.restoreUserLogin();
  }

restoreUserLogin() {
  const json = localStorage.getItem('autenticated');
  if(json) {
    const user = JSON.parse(json);
      this.authSubject.next(user);
    }
  }


  Login(obj: ISignupData) {

    return this.http.post<IAuthData>(this.API + '/api/login', obj).pipe(
      tap(data => {
      let test =JSON.stringify(data);
      let test2 = '"'+"error"+'"'
        if( test == test2){
          this.error = true;
          this.errorstring = "i dati inseriti sono sbagliati!";
        } else{
          this.error= false;
          this.authSubject.next(data);
          localStorage.setItem("autenticated", JSON.stringify(data));
        
        }
        
      })

    );
  }
logout(){
  localStorage.removeItem('autenticated');
  this.router.navigate(['/home']);
}

}
