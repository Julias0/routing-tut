import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazOneComponent } from './laz-one/laz-one.component';
import { LazTwoComponent } from './laz-two/laz-two.component';
import { LazLayoutComponent } from './laz-layout/laz-layout.component';


const routes: Routes = [
  {
    path: '',
    component: LazLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'one'
      },
      {
        path: 'one',
        component: LazOneComponent
      },
      {
        path: 'two',
        component: LazTwoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazRoutingModule { }
