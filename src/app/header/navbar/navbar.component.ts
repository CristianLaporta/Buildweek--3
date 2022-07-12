import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  currentRoute: string = window.location.pathname;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {

}
ngDoCheck(): void {

  this.currentRoute = window.location.pathname;
}
logout() {
  this.authService.logout();
  this.router.navigate(['./login']);
}
}
