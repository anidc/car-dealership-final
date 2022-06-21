import { Component, OnInit } from '@angular/core';
import { CarsServiceService } from 'src/app/shared/services/cars-service.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  cars: any = []
  makes: any = []
  filterMake: any = [{ make_id: -1 }]

  activeMake: number = 0

  constructor(private carService: CarsServiceService) { }

  ngOnInit(): void {
    this.getCars()
    this.getMake()
  }

  getCars() {
    this.carService.searchCar().subscribe(response => this.cars = response)
  }

  getFilterMakes() {
    this.carService.getMake().subscribe(response => this.filterMake = response)
  }

  getMake() {
    this.carService.getMake().subscribe(response => this.makes = response)
  }

  activatedMake(make: any) {
    this.activeMake = make.id
    this.carService.searchCar({ make_id: make.id }).subscribe(response => this.cars = response)
  }
}
