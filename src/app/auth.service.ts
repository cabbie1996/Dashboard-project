import { Injectable } from '@angular/core';
import { CanActivate, Router } from "@angular/router";

export class UserService {
  isLoggedIn():boolean {
        let token=localStorage.getItem('token');
        if(token !=null){
          return true;
        }
        else{
          return false;
        }
      }
}

@Injectable()
export class OnlyLoggedInUsersGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) { }
  canActivate() {
    if (this.userService.isLoggedIn()) {
      console.log("logged in")
      return true;
    }
    else {
      this.router.navigate(['/']);
      console.log("not logged in")
    }
  }
}

// Authentication for login