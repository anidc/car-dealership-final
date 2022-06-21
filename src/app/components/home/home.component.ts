import { Component, OnInit } from '@angular/core';
import { CarsServiceService } from 'src/app/shared/services/cars-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cars: any = []
  showNavigationIndicators = true;
  constructor(private carService: CarsServiceService) { }

  ngOnInit(): void {
    this.getCars()
  }

  getCars() {
    this.carService.homeCars().subscribe(response => this.cars = response)
  }
}
