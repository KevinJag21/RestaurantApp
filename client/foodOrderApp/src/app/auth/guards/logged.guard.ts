import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedGuard implements CanActivate, CanLoad {

  constructor(private authSvc: AuthService, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.authSvc.verifyLogged()
            .pipe(
              tap( isAuth => {
                if( !isAuth ) {
                  this.router.navigate(['./user']);
                }
              })
            )
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {

      return this.authSvc.verifyLogged()
            .pipe(
              tap( isAuth => {
                if( !isAuth ) {
                  console.log('bloquedpo por logged canload')
                  this.router.navigate(['./user']);
                }
              })
            )
  }
}
