import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { HomeComponent } from '../app/components/home/home.component';
import { UsersComponent } from '../app/components/user/user.component';
import { ServiceProvidersComponent } from '../app/components/service-provider/service-provider.component';

const routes: Routes = [
  { path: 'dashboard', component: DashBoardComponent },
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'service-providers', component: ServiceProvidersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
