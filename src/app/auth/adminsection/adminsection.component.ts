import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { provideProtractorTestingSupport } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';




@Component({
  templateUrl: './adminsection.component.html',
  styleUrls: ['./adminsection.component.scss']
})
export class AdminsectionComponent implements OnInit {

 fattureutentespec:any = [];
idfatturamod= 0;
  displayedColumns: string[] = ['name', 'surname', 'email', 'address','visualizza'];
  dataSource:any = [];
  prezzocambiato:any;
  constructor( private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.fatture()
  }

  indexTab = 0;
  selectTab(index: number): void {
    this.indexTab = index;
  }


  visualizzaIndex = 0;
  visualizza(index: number): void {
    this.visualizzaIndex = index;
  }
  fatture(){
    this.route.params.subscribe(ele => {
      this.http.get("https://socialcris.duckdns.org:8446/api/utenti/").subscribe(Response => this.dataSource = Response);   

    })

}
visualizzafatture(id:any){
  this.route.params.subscribe(ele => {
    this.http.get("https://socialcris.duckdns.org:8446/api/fattureid/?id="+id).subscribe(Response => this.fattureutentespec = Response);   
console.log(id)
})
}
eliminafattura(id:any){
  this.route.params.subscribe(ele => {
    this.http.get("https://socialcris.duckdns.org:8446/api/eliminafattura/?id="+id).subscribe(Response => this.fattureutentespec = Response);   
    this.selectTab(0)
})

}
modificafattura(id:any){
this.idfatturamod = id;

}
cambioprezzo(){

  this.route.params.subscribe(ele => {
    this.http.get("https://socialcris.duckdns.org:8446/api/modificafattura/?id="+ this.idfatturamod+ "&prezzo="+ this.prezzocambiato ).subscribe(Response => this.fattureutentespec = Response);   
    this.selectTab(0)
})

}}