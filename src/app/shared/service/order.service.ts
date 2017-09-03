import { Injectable } from '@angular/core';
import { NumberItem } from "../component/number.item";
import { MenuItem } from "../component/menu.item";
import { HotmotItem } from "../component/hotmot.item";
import { Order } from "./order";
import { NgForm } from "@angular/forms";

@Injectable()
export class OrderService {

  hnumbers: NumberItem[];
  hmenus: MenuItem[];
  hsizes: MenuItem[];
  hotmotItem: HotmotItem = new HotmotItem();

  orderLists: Order[];
  
  constructor() {
    this.orderLists = [];
    this.hnumbers = this.hotmotItem.dnumber;
    this.hmenus = this.hotmotItem.dmenu;
    this.hsizes = this.hotmotItem.dsize;
  }

  getNumberList(): NumberItem[] {
    return this.hnumbers;
  }
  getHotmotMenuList(): MenuItem[] {
    return this.hmenus;
  }
  getHotmotSizeList(): MenuItem[] {
    return this.hsizes;
  }

  add(order: Order) {
    this.orderLists.push(order);
  }

  delete(i: number) {
    this.orderLists.splice(i, 1);
  }

  update(i: number, order: Order) {
    this.orderLists[i] = order;
  }

  get orderList() {
    return this.orderLists;
  }

  orderClear() {
    this.orderLists = [];
  }

  getPayment(form: NgForm) {
    let menuPrice = 0;
    let numberValue = 0;
    let sizePrice = 0;

    if (form.value.menuList != null) {
      menuPrice = form.value.menuList.price;
    }
    if (form.value.numberList != null) {
      numberValue = form.value.numberList.value;
    }
    if (form.value.sizeList != null) {
      sizePrice = Number(form.value.sizeList.price);
    }

    if (isNaN(menuPrice * numberValue + sizePrice)) {
      return 0;
    } else {
      return menuPrice * numberValue + sizePrice;
    }
  }



}
