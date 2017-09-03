import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotmotRoutingModule } from './hotmot-routing.module';
import { HotmotComponent } from "./hotmot.component";
import { HotmotInputComponent } from "./hotmot-input/hotmot-input.component";
import { HotmotListComponent } from "./hotmot-list/hotmot-list.component";
import { HotmotUpdateComponent } from "./hotmot-update/hotmot-update.component";
import { HotmotDetailComponent } from "./hotmot-detail/hotmot-detail.component";
import { HotmotConfirmComponent } from "./hotmot-confirm/hotmot-confirm.component";
import { SharedModule } from "../../shared/shared.module";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    HotmotRoutingModule
  ],
  declarations: [
    HotmotComponent, 
    HotmotInputComponent, 
    HotmotListComponent, 
    HotmotUpdateComponent,
    HotmotDetailComponent,
    HotmotConfirmComponent
  ]
})
export class HotmotModule { }
