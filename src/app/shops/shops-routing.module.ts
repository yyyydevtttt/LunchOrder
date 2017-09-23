import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotmotComponent } from './hotmot/hotmot.component';
import { GattsuriComponent } from './gattsuri/gattsuri.component';
import { ShopsComponent } from './shops.component';

const routes: Routes = [
  { path: '', component: ShopsComponent, pathMatch: 'full' },
  { path: 'hotmot', loadChildren: './hotmot/hotmot.module#HotmotModule' },
  { path: 'gattsuri', component: GattsuriComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopsRoutingModule { }
