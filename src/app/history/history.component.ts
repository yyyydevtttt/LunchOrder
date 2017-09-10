import { Component, OnInit } from '@angular/core';
import { OrderService } from "../shared/service/order.service";
import { Order } from "../shared/service/order";
import { Router } from "@angular/router";

import { OrderSelectInfo } from "../shared/service/orderSelectInfo";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  orderHistorys: OrderSelectInfo[] = [];

  constructor(
    private router: Router,
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this.orderService.selectHistory('テスト')
      .then(response => this.orderHistorys = response)
      .catch(error => console.log('select error: ', error));
    console.log(this.orderHistorys);
  }

  gotoHome() {
    this.router.navigate(['/']);
  }

}
