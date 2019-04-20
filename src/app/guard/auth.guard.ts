import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { map, take, tap, switchMap } from 'rxjs/operators';
import { UserService } from '../services/user/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private userService: UserService, private router: Router) {}


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {
      
      let isAllowed = (user) => this.userService.getUserRights(user.uid).pipe(
        map(u => {
          if (u){ return u.rights>=2; }
          else{ return false; }
        }),
        take(1),
        tap(allowed => {
          if(!allowed) {
              this.router.navigate(['/private']);
          }
        }),
      );

      return this.auth.getAuthState().pipe(switchMap(user => {
        if (user){ 
          return isAllowed(user)}
        else{
          return of(false);
        }
      }));
  }
}