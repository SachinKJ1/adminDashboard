import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RevenueHomeComponent } from './revenue-home/revenue-home.component';

const routes: Routes = [
  {path:'',component:RevenueHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RevenueRoutingModule { }
