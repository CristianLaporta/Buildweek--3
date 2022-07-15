import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.scss']
})
export class CarrelloComponent implements OnInit {
  idutente!:number;
  carrellol:any = [];
  constructor(private authService: AuthService, private http: HttpClient, private route: ActivatedRoute) { }
  ngOnInit(): void {
   this.verifyuser()
  }
  verifyuser() {
    this.authService.authSubject.subscribe(val => {
    if (val !== null) {
     fetch('https://socialcris.duckdns.org:8446/api/verify/'+ val)
       .then((response) => response.json()).then((response) => {
         this.postGetl(response[0].iduser) 
        }
        )}})
        }
        postGetl(obj: string) {
          this.route.params.subscribe(ele => {
              this.http.get("https://socialcris.duckdns.org:8446/api/carrello/?name="+obj).subscribe(Response =>  this.carrellol.push(Response));   
             
          }
          )
        }    
        clearstore(obj:any){
          this.route.params.subscribe(ele => {
            this.http.delete("https://socialcris.duckdns.org:8446/api/carrelloremove/"+obj).subscribe(Response => console.log(Response));   
          })
          this.carrellol= [];
          setTimeout(() => {
            this.verifyuser()
          }, 500)
       
        }
}
