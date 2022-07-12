import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './err.page.html',
  styleUrls: ['./err.page.scss']
})
export class ErrPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirect() {
    this.router.navigate(['./home']);
  }
}

