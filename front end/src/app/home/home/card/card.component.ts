import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @ViewChild('f') form!:NgForm;
prodotti:any = [];
acces:boolean = false;
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private _snackBar: MatSnackBar ) { }

  ngOnInit(): void {
    this.postGet()
  }

  postGet() {
    this.route.params.subscribe(ele => {
        this.http.get("http://localhost:3000/api/prodotti").subscribe(Response => this.prodotti.push(Response));
    }
    )
  }
  openSnackBar(message: string) {
    this._snackBar.open(message+ " "+'aggiunto al carrello!', "okay");
  }
}