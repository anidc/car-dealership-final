import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from './User.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(private userService: UserService, private router: Router, private toastrService: ToastrService) { }

    canActivate() {
        if (!this.userService.loggedUser.id) {
            this.router.navigateByUrl("login")
            this.toastrService.info("Morate biti prijavljeni")
            return false;
        }
        return true;
    }
}