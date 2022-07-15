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
  {id: 1, name: 'Cristian', surname: 'Rossi', email:  'cristianrossi@gmail.com' , address: 'Via Trento 11' , price: 24, fattura:'fattura-1' },
  {id: 2, name: 'Salvatore' , surname: 'Rossi', email:  'salvatorerossi@gmail.com' , address: 'Via Trento 11' , price: 31, fattura:'fattura-2'},
  {id: 3, name: 'Eloise', surname: 'Rossi', email:  'eloiserossi@gmail.com' , address: 'Via Trento 11' , price: 21, fattura:'fattura-3' },
  {id: 4, name: 'Alessandro', surname: 'Rossi', email:  'alerossi@gmail.com' , address: 'Via Trento 11' , price:16 , fattura:'fattura-4'},
  {id: 5, name: 'Giulia', surname: 'Rossi',email:  'giurossi@gmail.com' , address: 'Via Trento 11' , price: 17, fattura:'fattura-5'},
  {id: 6, name: 'Alessia', surname: 'Rossi', email:  'alessiarossi@gmail.com' , address: 'Via Trento 11' , price: 44, fattura:'fattura-6'},
  {id: 7, name: 'Francesca', surname: 'Rossi', email:  'francescarossi@gmail.com' , address: 'Via Trento 11' , price: 20, fattura:'fattura-7'},
  {id: 8, name: 'Marco', surname: 'Rossi', email:  'marcorossi@gmail.com' , address: 'Via Trento 11' , price: 19, fattura:'fattura-8'}
];
@Component({
  templateUrl: './adminsection.component.html',
  styleUrls: ['./adminsection.component.scss']
})
export class AdminsectionComponent implements OnInit {
  displayedColumns: string[] = ['name', 'surname', 'email', 'address', 'price', 'fattura','visualizza'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

  indexTab = 0;
  selectTab(index: number): void {
    this.indexTab = 3;
    console.log(this.indexTab)
    this.indexTab = index;
    console.log(this.indexTab)
  }


  visualizzaIndex = 0;
  visualizza(index: number): void {
    this.visualizzaIndex = index;
  }


}
