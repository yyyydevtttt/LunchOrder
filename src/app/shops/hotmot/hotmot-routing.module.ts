import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotmotComponent } from './hotmot.component';
import { HotmotConfirmComponent } from './hotmot-confirm/hotmot-confirm.component';
import { HotmotUpdateComponent } from './hotmot-update/hotmot-update.component';

const routes: Routes = [
  { path: '', component: HotmotComponent, pathMatch: 'full' },
  { path: 'confirm', component: HotmotConfirmComponent, pathMatch: 'full' },
  { path: 'update/:id', component: HotmotUpdateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotmotRoutingModule { }
