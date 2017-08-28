import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopsRoutingModule } from './shops-routing.module';
import { HotmotComponent } from "./hotmot/hotmot.component";
import { GattsuriComponent } from "./gattsuri/gattsuri.component";
import { ShopsComponent } from './shops.component';

@NgModule({
  imports: [
    CommonModule,
    ShopsRoutingModule
  ],
  declarations: [HotmotComponent, GattsuriComponent, ShopsComponent]
})
export class ShopsModule { }
