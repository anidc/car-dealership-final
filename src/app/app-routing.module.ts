import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { AdminDashComponent } from './components/admin-dash/admin-dash.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { CarsComponent } from './components/cars/cars.component';
import { CartComponent } from './components/cart/cart.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthGuard } from './shared/services/AuthGuard';

const routes: Routes = [
  { path: '', redirectTo: "home", pathMatch: "full" },
  { path: 'home', component: HomeComponent },
  { path: 'cars', component: CarsComponent },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
  { path: 'favorites', component: FavoriteComponent, canActivate: [AuthGuard] },
  { path: 'profile/:id', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'admin', component: AdminDashComponent, canActivate: [AuthGuard] },
  { path: 'registration', component: RegistrationComponent },
  { path: 'car/:id', component: CarDetailsComponent },
  { path: '**', redirectTo: "home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
