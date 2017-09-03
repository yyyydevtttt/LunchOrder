import { Component, OnInit } from '@angular/core';
import { OrderService } from "../shared/service/order.service";
import { Order } from "../shared/service/order";
import { Router } from "@angular/router";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  orderList: Order[] = [];

  constructor(
    private router: Router,
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this.orderList = this.orderService.orderList;
  }

  gotoHome() {
    this.router.navigate(['/']);
  }

}
