import { Component, OnInit } from '@angular/core';
import { NumberItem } from '../../../shared/component/number.item';
import { MenuItem } from '../../../shared/component/menu.item';
import { HotmotItem } from '../../../shared/component/hotmot.item';
import { NgForm } from '@angular/forms';
import { OrderService } from '../../../shared/service/order.service';
import { Router } from '@angular/router';
import { Order } from '../../../shared/service/order';

@Component({
  selector: 'app-hotmot-input',
  templateUrl: './hotmot-input.component.html',
  styleUrls: ['./hotmot-input.component.scss']
})
export class HotmotInputComponent implements OnInit {

  pageTitle = 'ほっともっと';

  dnumbers: NumberItem[];
  dmenus: MenuItem[];
  dsizes: MenuItem[];

  constructor(
    private router: Router,
    private orderService: OrderService
  ) {}

  ngOnInit() {
    this.dnumbers = this.orderService.getNumberList();
    this.dmenus = this.orderService.getHotmotMenuList();
    this.dsizes = this.orderService.getHotmotSizeList();
  }

  onSubmit(form: NgForm) {
    const order: Order = {
      omise: this.pageTitle,
      menu: form.value.menuList.value,
      size: form.value.sizeList.value,
      count: form.value.numberList.value,
      price: Number(this.getPayment(form)),
      order_date: new Date(form.value.ddate)
    };

    this.orderService.add(order);
    this.router.navigate(['/shops/hotmot/confirm']);

    form.reset();
  }

  getPayment(form: NgForm) {
    return this.orderService.getPayment(form);
  }

  check(form: NgForm) {
    console.log(form.value.menuList);
    console.log(form.value.menuList.price);
  }



}
