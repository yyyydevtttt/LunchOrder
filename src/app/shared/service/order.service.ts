import { Injectable } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';

import { NumberItem } from "../component/number.item";
import { MenuItem } from "../component/menu.item";
import { HotmotItem } from "../component/hotmot.item";
import { Order } from "./order";
import { OrderInsertInfo } from "./orderInsertInfo";

@Injectable()
export class OrderService {

  headers = new Headers({'Content-Type': 'application/json'});
  url = 'http://tk2-252-35568.vs.sakura.ne.jp:3000/api/order';
  
  hnumbers: NumberItem[];
  hmenus: MenuItem[];
  hsizes: MenuItem[];
  hotmotItem: HotmotItem = new HotmotItem();

  orderLists: Order[];
  
  constructor(private http: Http) {
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

  orderInsert(orderInsertInfo: OrderInsertInfo) {
    let tmpUrl = this.url + '/confirm';
    this.http.post(tmpUrl, JSON.stringify(orderInsertInfo), { headers: this.headers })
    .toPromise()
    // .then(() => this.issues.push(issue))
    .catch(this.handleError);
  }

  getMySQLDate(tmpDate: Date) {
    let datetime = String(tmpDate.getFullYear()) + '-' 
                   + String(tmpDate.getMonth()+101).substr(1,2) + '-' 
                   + String(tmpDate.getDate()+100).substr(1,2) + ' '
                   + String(tmpDate.getHours()+100).substr(1,2) + ':' 
                   + String(tmpDate.getMinutes()+100).substr(1,2) + ':' 
                   + String(tmpDate.getSeconds()+100).substr(1,2);
    return datetime;
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }


}
