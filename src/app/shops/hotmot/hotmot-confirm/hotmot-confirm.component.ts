import { Component, OnInit } from '@angular/core';
import { Order } from "../../../shared/service/order";
import { OrderService } from "../../../shared/service/order.service";
import { Location } from '@angular/common';
import { Router } from "@angular/router";
import { OrderInsertInfo } from "../../../shared/service/orderInsertInfo";


@Component({
  selector: 'app-hotmot-confirm',
  templateUrl: './hotmot-confirm.component.html',
  styleUrls: ['./hotmot-confirm.component.scss']
})
export class HotmotConfirmComponent implements OnInit {

  orderList: Order[];
  orderInsertInfo: OrderInsertInfo;

  constructor(
    private location: Location,
    private router: Router,
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this.orderList = this.orderService.orderList;
    if (this.orderList.length === 0) {
      this.cancel();
    }
  }

  goBack() {
    this.location.back();
  }
  cancel() {
    this.orderService.orderClear();
    this.router.navigate(['/']);
  }

  submit() {
    for (let i = 0; i < this.orderList.length; i++) {
      this.orderInsertInfo = {
        order: this.orderList[i],
        order_user_id: 'テスト',
        order_date: this.orderService.getMySQLDate(
            this.orderList[i].order_date
        )
      }
      this.orderService.orderInsert(this.orderInsertInfo);
    }
    this.router.navigate(['/history']);    
  }

}


/*
        omise: this.orderList[i].omise,
        menu: this.orderList[i].menu,
        size: this.orderList[i].size,
        count: this.orderList[i].count,
        price: this.orderList[i].price,

*/