import { Component, OnInit } from '@angular/core';

export interface DatiFattura {
  id: number;
  name: string;
  surname: string;
  email: string;
  address: string;
  price: number;
  fattura: string;
}

const ELEMENT_DATA: DatiFattura[] = [
  {id: 1, name: '', surname: '', email:  '' , address: '' , price: 1, fattura:'' },
  {id: 2, name: '' , surname: '', email:  '' , address: '' , price: 1, fattura:''},
  {id: 3, name: '', surname: '', email:  '' , address: '' , price: 1, fattura:'' },
  {id: 4, name: '', surname: '', email:  '' , address: '' , price:1 , fattura:''},
  {id: 5, name: '', surname: '',email:  '' , address: '' , price: 1, fattura:''},
  {id: 6, name: '', surname: '', email:  '' , address: '' , price: 44, fattura:''},
  {id: 7, name: '', surname: '', email:  '' , address: '' , price: 20, fattura:''},
  {id: 8, name: '', surname: '', email:  '' , address: '' , price: 19, fattura:''}
];
@Component({
  templateUrl: './adminsection.component.html',
  styleUrls: ['./adminsection.component.scss']
})
export class AdminsectionComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

  indexTab = 0;
  selectTab(index: number): void {
    this.indexTab = index;
  }
}
