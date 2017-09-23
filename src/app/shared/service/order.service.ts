import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Headers, Http } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';

import { NumberItem } from '../component/number.item';
import { MenuItem } from '../component/menu.item';
import { HotmotItem } from '../component/hotmot.item';
import { Order } from './order';
import { OrderInsertInfo } from './orderInsertInfo';
import { OrderSelectInfo } from './orderSelectInfo';

@Injectable()
export class OrderService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private url = 'http://tk2-252-35568.vs.sakura.ne.jp:3000/api/order';

  private hnumbers: NumberItem[];
  private hmenus: MenuItem[];
  private hsizes: MenuItem[];
  private hotmotItem: HotmotItem = new HotmotItem();

  private orderLists: Order[];
  private orderHistorys: OrderSelectInfo[];

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

  get orderHistory() {
    return this.orderHistorys;
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
    const tmpUrl = this.url + '/confirm';
    this.http.post(tmpUrl, JSON.stringify(orderInsertInfo), { headers: this.headers })
    .toPromise()
    // .then(() => this.issues.push(issue))
    .catch(this.handleError);
  }

  selectHistory(order_user_id: string): Promise<OrderSelectInfo[]> {
    const tmpUrl = this.url + '/history';
    return this.http.post(tmpUrl, JSON.stringify({order_user_id: order_user_id}), { headers: this.headers })
      .toPromise()
      .then(response => {
        this.orderHistorys = response.json().resultList;
        console.log('service log:', this.orderHistorys[0]);
        return this.orderHistorys;
      })
      .catch(this.handleError);
  }

  getMySQLDate(tmpDate: Date) {
    const datetime = String(tmpDate.getFullYear()) + '-'
                   + String(tmpDate.getMonth() + 101).substr(1, 2) + '-'
                   + String(tmpDate.getDate() + 100).substr(1, 2) + ' '
                   + String(tmpDate.getHours() + 100).substr(1, 2) + ':'
                   + String(tmpDate.getMinutes() + 100).substr(1, 2) + ':'
                   + String(tmpDate.getSeconds() + 100).substr(1, 2);
    return datetime;
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }


}
