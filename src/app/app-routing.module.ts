import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { CapitalizeResolver } from './resolvers/capitalize.resolver';
import { NameGuard } from './name.guard';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'profile/:name',
    component: ProfileComponent,
    resolve: {
      upperCaseName: CapitalizeResolver
    },
    canActivate: [NameGuard]
  },
  {
    path: 'laz',
    loadChildren: () => import('./laz/laz.module').then(m => m.LazModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
