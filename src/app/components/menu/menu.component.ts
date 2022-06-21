import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/shared/services/User.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(public userService: UserService, public router: Router, private toastrService: ToastrService) { }

  ngOnInit(): void {
  }

  showProfile(id: number) {
    this.router.navigateByUrl("/profile/" + id)
  }

  logout() {
    localStorage.removeItem("loggedUser")
    this.router.navigateByUrl("login")
    this.toastrService.info("Uspjesno ste odjavljeni")
  }
}
