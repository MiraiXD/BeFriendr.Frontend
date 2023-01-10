import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../services/users/users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthUsernameGuard implements CanActivate {
  constructor(private usersService: UsersService){}
  canActivate(
    route: ActivatedRouteSnapshot): boolean {
      console.log('AUTH USERNAME GUARD' + this.usersService.isLoggedInAs(route.params?.['userName']));
    return this.usersService.isLoggedInAs(route.params?.['userName']);
  }
  
}
