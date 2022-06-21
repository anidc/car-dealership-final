import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/shared/services/User.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = ""
  password: string = ""

  constructor(private router: Router, private userService: UserService, private toastrService: ToastrService) { }

  ngOnInit(): void {
  }
  login() {
    this.userService.loginUser(this.email, this.password).subscribe(response => {
      if (!response.id) { this.toastrService.error("Pogresan email ili sifra!") }
      else {
        if (response.status == "BAN") {
          this.toastrService.error("Vi ste banovani")
        }
        else {

          this.toastrService.success("Uspjesno ste prijavljeni.")
          delete response.password;
          localStorage.setItem("loggedUser", JSON.stringify(response))
          this.router.navigateByUrl("home")
        }
      }
    })
  }
}
