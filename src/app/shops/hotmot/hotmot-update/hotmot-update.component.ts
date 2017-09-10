import { Component, OnInit, Input } from '@angular/core';
import { Order } from "../../../shared/service/order";
import { NumberItem } from "../../../shared/component/number.item";
import { MenuItem } from "../../../shared/component/menu.item";
import { Router } from "@angular/router";
import { OrderService } from "../../../shared/service/order.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-hotmot-update',
  templateUrl: './hotmot-update.component.html',
  styleUrls: ['./hotmot-update.component.scss']
})
export class HotmotUpdateComponent implements OnInit {

  @Input()
  rownum: number;
  @Input()
  order: Order;
  
  dnumbers: NumberItem[];
  dmenus: MenuItem[];
  dsizes: MenuItem[];


  constructor(
    private router: Router,
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this.dnumbers = this.orderService.getNumberList();
    this.dmenus = this.orderService.getHotmotMenuList();
    this.dsizes = this.orderService.getHotmotSizeList();
  }

  onSubmit(form: NgForm) {
    const order: Order = {
      omise: this.order.omise,
      menu: form.value.menuList.value,
      size: form.value.dsize.value,
      count: form.value.numberList.value,
      price: Number(this.getPayment(form)),
      order_date: new Date(form.value.ddate)
    };

    this.orderService.update(this.rownum, order);
    this.router.navigate(['/shops/hotmot/confirm']);

    form.reset();
  }

  getPayment(form: NgForm) {
    this.orderService.getPayment(form);
  }



}
