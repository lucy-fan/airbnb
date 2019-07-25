import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { HomeComponent } from '../app/components/home/home.component';
import { UsersComponent } from '../app/components/user/user.component';
import { BookingComponent } from '../app/components/booking/booking.component';
import { ListingsComponent } from '../app/components/listing/listing.component';

const routes: Routes = [
  { path: 'dashboard', component: DashBoardComponent },
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'listings', component: ListingsComponent },
  { path: 'bookings', component: BookingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
