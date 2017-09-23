import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotmot',
  templateUrl: './hotmot.component.html',
  styleUrls: ['./hotmot.component.scss']
})
export class HotmotComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoHome() {
    this.router.navigate(['/']);
  }

}

