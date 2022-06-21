import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarsServiceService } from 'src/app/shared/services/cars-service.service';
import { UserService } from 'src/app/shared/services/User.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss']
})
export class CarDetailsComponent implements OnInit {

  carDetail: any = {}

  constructor(private carService: CarsServiceService, private router: ActivatedRoute, private toastr: ToastrService, private userService: UserService, private route: Router) { }

  ngOnInit(): void {
    const id = this.router.snapshot.params.id
    this.selectCarById(id)
  }
  selectCarById(id: number) {
    this.carService.selectCarById(id).subscribe(response => this.carDetail = response)
  }

  addToCart(id: number) {
    if (!this.userService.loggedUser.id) {
      this.route.navigateByUrl("login")
    }
    this.carService.addToCart(id).subscribe(response => {
      this.toastr.success("Uspjesno dodano u korpu")
    })
  }

  addToFavorites(id: number) {
    if (!this.userService.loggedUser.id) {
      this.route.navigateByUrl("login")
    }
    this.carService.addToFavorites(id).subscribe(response => {
      this.toastr.success("Uspjesno dodano u omiljene")
    })
  }
}
