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
  totale:number= 0;
  idrecuperato:any;
  nome!:any;
  cognome!:any;
  email!:any;
  indirizzo!:any;
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
    this.idrecuperato = response[0].iduser;
    this.nome = response[0].nome;
    this.cognome = response[0].cognome;
    this.email = response[0].email;
    this.indirizzo = response[0].indirizzo;
        }
        )}})
        }
        postGetl(obj: string) {
          this.route.params.subscribe(ele => {
              this.http.get("https://socialcris.duckdns.org:8446/api/carrello/?name="+obj).subscribe(Response => {
               
                this.carrellol = Response;
                let initialValue = 0
                let totale = 0;
                
                while( initialValue < this.carrellol.length ) {
                  let test = this.carrellol[initialValue].prezzo;
                 let ciao = parseInt(test);
                  totale += ciao;
                  initialValue = initialValue +1
                  this.totale = totale
                }
          });
              
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
        
        compra(obj: any){
       console.log(this.totale);
       fetch("https://socialcris.duckdns.org:8446/api/fatture" + "?nome=" + this.nome + "&cognome=" + this.cognome + "&email=" + this.email + "&indirizzo=" + this.indirizzo +"&idutente=" + this.idrecuperato+"&totale=" + this.totale , {
        method: "POST",
        cache: 'no-cache'
      }).then(function (response) { return console.log(response); });

        
       this.route.params.subscribe(ele => {
        this.http.delete("https://socialcris.duckdns.org:8446/api/carrelloremoveall/"+this.idrecuperato).subscribe(Response => console.log(Response));   
        this.carrellol = [];
        this.totale = 0;
      })

       
        }
}
