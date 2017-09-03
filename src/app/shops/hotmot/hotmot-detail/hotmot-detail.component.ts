import { Component, OnInit, Input } from '@angular/core';
import { Order } from "../../../shared/service/order";
import { OrderService } from "../../../shared/service/order.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-hotmot-detail',
  templateUrl: './hotmot-detail.component.html',
  styleUrls: ['./hotmot-detail.component.scss']
})
export class HotmotDetailComponent implements OnInit {

  @Input()
  rownum: number;
  @Input()
  order: Order;

  constructor(
    private router: Router,
    private orderService: OrderService
  ) { }

  ngOnInit() {
  }

  convertDate(date: Date) {
    return date.getDate;
  }

  delete() {
    this.orderService.delete(this.rownum);
    if (this.orderService.orderList.length === 0) {
      this.router.navigate(['/']);
    } else {
      this.router.navigate(['/shops/hotmot/confirm']);      
    }
  }

  update() {
    
  }

}
