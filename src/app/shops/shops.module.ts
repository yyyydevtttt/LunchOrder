import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopsRoutingModule } from './shops-routing.module';
import { GattsuriComponent } from "./gattsuri/gattsuri.component";
import { ShopsComponent } from './shops.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ShopsRoutingModule
  ],
  declarations: [GattsuriComponent, ShopsComponent]
})
export class ShopsModule { }
