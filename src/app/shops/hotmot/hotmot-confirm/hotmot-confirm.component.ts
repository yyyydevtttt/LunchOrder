import { Component, OnInit } from '@angular/core';
import { Order } from "../../../shared/service/order";
import { OrderService } from "../../../shared/service/order.service";
import { Location } from '@angular/common';
import { Router } from "@angular/router";


@Component({
  selector: 'app-hotmot-confirm',
  templateUrl: './hotmot-confirm.component.html',
  styleUrls: ['./hotmot-confirm.component.scss']
})
export class HotmotConfirmComponent implements OnInit {

  orderList: Order[];

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
    this.router.navigate(['/history']);    
  }

}
