import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-hotmot',
  templateUrl: './hotmot.component.html',
  styleUrls: ['./hotmot.component.scss']
})
export class HotmotComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


}

/*

  
  getPayment(form: NgForm) {
    let menuPrice = 0;
    let numberValue = 0;
    let sizePrice = 0;

    if (!form.value.menuList) {
      console.log('メニュー', form.value.menuList);
      menuPrice = this.hotmotItem.getMenuPrice(form.value.menuList);
    }
    if (!form.value.numberList) {
      console.log('個数', form.value.numberList);
      numberValue = this.hotmotItem.getNumberValue(form.value.numberList);
    }
    if (!form.value.sizeList) {
      console.log('サイズ', form.value.sizeList);
      sizePrice = this.hotmotItem.getSizePrice(form.value.sizeList);
    }

    return menuPrice * numberValue + sizePrice;


/*      return this.hotmotItem.getMenuPrice(form.value.menuList)
            * this.hotmotItem.getNumberValue(form.value.numberList)
            + this.hotmotItem.getSizePrice(form.value.sizeList);
    
          }
          nullCheck(form: NgForm) {
            if (isNaN(form.value.menuList) 
              || isNaN(form.value.numberList)
              || isNaN(form.value.sizeList)) {
              return false;
            } else {
              true;
            }
          }

*/
