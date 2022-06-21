import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CarsServiceService } from 'src/app/shared/services/cars-service.service';

@Component({
  selector: 'app-admin-cars',
  templateUrl: './admin-cars.component.html',
  styleUrls: ['./admin-cars.component.scss']
})
export class AdminCarsComponent implements OnInit {

  car = {}
  types: any = []
  makes: any = []
  models: any = []
  transmissions: any = []
  colors: any = []
  fuels: any = []
  cars: any = []
  newCar: any = { fuel_id: -1, type_id: -1, make_id: -1, model_id: -1, transmission_id: -1, color_id: -1 }
  constructor(private carsService: CarsServiceService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.carsService.getType().subscribe(
      response => {
        this.types = response
      }
    )

    this.carsService.getColor().subscribe(
      response => {
        this.colors = response
      }
    )

    this.carsService.getFuel().subscribe(
      response => {
        this.fuels = response
      }
    )

    this.carsService.getTransmission().subscribe(
      response => {
        this.transmissions = response
      }
    )

    this.carsService.getMake().subscribe(
      response => {
        this.makes = response
      }
    )

    this.carsService.getModel().subscribe(
      response => {
        this.models = response
      }
    )
    this.getCars()
  }
  saveCar() {
    this.carsService.createCar(this.newCar).subscribe(
      result => {
        this.toastr.success("Uspjesno dodan automobil!")
        this.getCars()
        this.clearForm()

      },
      error => {
        this.toastr.error("Neuspjesno dodan automobil!")
      }
    )
  }

  clearForm() {
    this.newCar = { fuel_id: -1, type_id: -1, make_id: -1, model_id: -1, transmission_id: -1, color_id: -1 }
  }

  getCars() {
    this.carsService.searchCar().subscribe(response => this.cars = response)
  }

  deleteCar(id: number) {
    console.log(id);
    this.carsService.deleteCar(id).subscribe((response: any) => {
      this.toastr.success(response.msg)
      this.getCars()
    })
  }

  editCar(car: any) {
    this.newCar = { ...car }
  }

  updateCar() {
    this.carsService.updateCar(this.newCar).subscribe(
      result => {
        this.toastr.success("Uspjesno uredjena objava")
        this.getCars()
        this.clearForm()
      },
      error => {
        this.toastr.error("Neuspjesno sacuvana objava", error)
      })
  }
}
