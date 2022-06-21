import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarsServiceService } from 'src/app/shared/services/cars-service.service';
import { UserService } from 'src/app/shared/services/User.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userInfo: any = {}
  boughtCars: any = []
  constructor(private userService: UserService, private router: ActivatedRoute, private carService: CarsServiceService) { }

  ngOnInit(): void {
    // const id = 
    const id = this.router.snapshot.params.id
    this.getUser(id)
    this.getBoughtCars()
  }

  getUser(id: number) {
    this.userService.getUserInfo(id).subscribe(response => {
      this.userInfo = response;
      console.log(this.userInfo.username)
      console.log(this.userInfo.first_name)
    })
  }

  getBoughtCars() {
    this.carService.allBoughtCars().subscribe(response => {
      console.log(response)
      this.boughtCars = response
    })
  }
}
