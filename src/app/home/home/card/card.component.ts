import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @ViewChild('f') form!:NgForm;
prodotti:any = [];
acces:boolean = false;
name!:string;
img!:string;
price!:number;
utente!:string;
idutente!:number;
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private _snackBar: MatSnackBar ,private authService: AuthService ) { }

  ngOnInit(): void {
    this.ceck()
    this.postGet()
   
  }

  postGet() {
    this.route.params.subscribe(ele => {
        this.http.get("https://socialcris.duckdns.org:8446/api/prodotti").subscribe(Response => this.prodotti.push(Response));
    }
    )
  }
  openSnackBar(message: string) {
    this._snackBar.open(message+ " "+'aggiunto al carrello!', "okay");

  }
  // verifica per il tasto acquista

  ceck(){
   if(localStorage.getItem('autenticated') == null){
    this.acces = false
   }else{
    this.acces = true
   }

  }



//sistema di verifica dei token taroccato



addcart(name: string,img: string,price: number) {
this.authService.authSubject.subscribe(val => {
if (val !== null) {
 fetch('https://socialcris.duckdns.org:8446/api/verify/'+ val)
   .then((response) => response.json()).then((response) => {
           
    this.name = name;
    this.img = img;
    this.price = price;
   this.utente = response[0].nickname;
     this.idutente = response[0].iduser
  this.addcartcomplete()
    }
    )}});
    }
    addcartcomplete() {
      if (this.utente !== "") {
        fetch("https://socialcris.duckdns.org:8446/api/carrello" + "?name=" + this.name + "&img=" + this.img + "&price=" + this.price + "&user=" + this.utente +"&idutente=" + this.idutente , {
          method: "POST",
          cache: 'no-cache'
        }).then(function (response) { return console.log(response); });
    
      };
    
    }
  }





