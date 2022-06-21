import { Component, OnInit } from '@angular/core';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { CarsServiceService } from 'src/app/shared/services/cars-service.service';

@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.scss']
})
export class AdminDashComponent implements OnInit {
  faCar = faCar;
  active = 'cars';
  numberOfCars: number = 0
  constructor(private carService: CarsServiceService) { }

  ngOnInit(): void {
    this.carService.countCar().subscribe((response: any) => this.numberOfCars = response["numberOfCars"])
  }



}
