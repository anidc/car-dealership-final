import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CarsServiceService } from 'src/app/shared/services/cars-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cars: any[] = []

  constructor(private carService: CarsServiceService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getCarsForUser()
  }

  getCarsForUser() {
    this.carService.getCarsFromUserCart().subscribe((response: any[]) => this.cars = response)
  }

  removeFromCart(id: any) {
    this.carService.removeFromCart(id).subscribe(
      success => {
        this.toastr.success("Uspjesno obrisan iz korpe")
        this.getCarsForUser()
      }
    )
  }

  removeAllFromCart() {
    this.carService.removeAllFromCart().subscribe(
      success => {
        this.getCarsForUser()
        this.toastr.success("Uspjesno obrisana auta")
      }
    )
  }

  buyFromCart() {
    this.carService.buyFromCart().subscribe(
      success => {
        this.getCarsForUser()
        this.toastr.success('Uspjesno kupljeno')
      }
    )
  }

}

