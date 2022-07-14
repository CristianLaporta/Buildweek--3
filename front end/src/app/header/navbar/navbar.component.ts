import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CarrelloComponent } from '../carrello/carrello.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  currentRoute: string = window.location.pathname;

  constructor(private authService: AuthService, private router: Router, public dialog: MatDialog ) { }

  ngOnInit(): void {

}
ngDoCheck(): void {

  this.currentRoute = window.location.pathname;
}
logout() {
  this.authService.logout();
  this.router.navigate(['./login']);
}
openDialog() {
  const dialogRef = this.dialog.open(CarrelloComponent,{
    autoFocus: false,
    maxHeight: '90vh' 
});
  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}
}
