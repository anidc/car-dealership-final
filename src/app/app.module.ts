import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CarsComponent } from './components/cars/cars.component';
import { CartComponent } from './components/cart/cart.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { CarCardComponent } from './shared/components/car-card/car-card.component';
import { AdminDashComponent } from './components/admin-dash/admin-dash.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdminCarsComponent } from './components/admin-dash/admin-cars/admin-cars.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AdminUsersComponent } from './components/admin-dash/admin-users/admin-users.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarsComponent,
    CartComponent,
    FavoriteComponent,
    LoginComponent,
    MenuComponent,
    FooterComponent,
    ProfileComponent,
    AboutusComponent,
    RegistrationComponent,
    CarCardComponent,
    AdminDashComponent,
    AdminCarsComponent,
    CarDetailsComponent,
    AdminUsersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: "toast-bottom-right",
      preventDuplicates: true,
    }),
    FontAwesomeModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
