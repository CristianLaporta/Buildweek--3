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
  user:any = [];
  userlenght!:any;
  useradmin!:number;
  cech = localStorage.getItem('autenticated');
  currentRoute: string = window.location.pathname;
  acces:boolean = false;
  constructor(private authService: AuthService, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.verifyuser() 
   
}
verifyuser() {
  this.authService.authSubject.subscribe(val => {
  if (val !== null) {
   fetch('https://socialcris.duckdns.org:8446/api/verify/'+ val)
     .then((response) => response.json()).then((response) => {
      this.user.push(response);
     this.useradmin = response[0].admin;
      }
      )}})
      }

ngDoCheck(): void {
  this.ceck()
  this.currentRoute = window.location.pathname;
  this.userlenght = this.user.length
}


logout() {
this.authService.logout()
location.reload(); 
}

openDialog(): void {
  const dialogRef = this.dialog.open(CarrelloComponent,{
    autoFocus: false,
    maxHeight: '90vh'
});
  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}


ceck(){
  if(localStorage.getItem('autenticated') == null){
   this.acces = false
  }else{
   this.acces = true
  }

 }
}
