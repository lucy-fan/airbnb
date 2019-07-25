import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'listings', loadChildren: './listings/listings.module#ListingsPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'listing-details', loadChildren: './listing-details/listing-details.module#ListingDetailsPageModule' },
  { path: 'book-now', loadChildren: './book-now/book-now.module#BookNowPageModule' },
  { path: 'bookings', loadChildren: './bookings/bookings.module#BookingsPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
