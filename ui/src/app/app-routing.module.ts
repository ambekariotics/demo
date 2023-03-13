import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DrillingopsComponent} from './drillingops/drillingops.component';
import {AddEventComponent} from './drillingops/add-event/add-event/add-event.component'
const routes: Routes = [
  {
    path:'',
    component: DrillingopsComponent
  },
  {
    path:'api/DrillPoints/del/:id',
    component: DrillingopsComponent
  },
  {
    path:'drillop/add',
    component: AddEventComponent
  },
  {
    path:'api/DrillPoints/:id',
    component: AddEventComponent
  }

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
