import { Component, OnInit, Input } from '@angular/core';
import { Order } from "../../../shared/service/order";

@Component({
  selector: 'app-hotmot-list',
  templateUrl: './hotmot-list.component.html',
  styleUrls: ['./hotmot-list.component.scss']
})
export class HotmotListComponent implements OnInit {

  @Input()
  orderList: Order[];

  edit: boolean[] = [];

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < 100; i++) {
      this.edit[i] = false;
    }
  }

  onClick(i: number) {
    this.edit[i] = true;
  }

}
