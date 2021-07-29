import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable , of} from 'rxjs';
import { environment } from '../../../environments/environment';
import { User } from '../interfaces/user.interface';
import { map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl : string = environment.baseUrl ;
  private _authUser : User | undefined;

  get auth(): User {
    return { ...this._authUser! }
  }

  constructor(private http : HttpClient) { }

  verifyLogged(){
    if ( !localStorage.getItem('token') ) {
      return of(true);
    }

    return of(false);
  }

  verifyAuth(){
    if ( !localStorage.getItem('token') ) {
      return of(false);
    }

    return of(true);
  }
  /**
   * this.http.get<User>(`${ this.baseUrl }/users/1`)
              .pipe(
                map( auth => {
                  this._authUser = auth;
                  return true;
                })
              );
   */

  login(email: string, password: string): Observable<User>{
    return this.http.get<User>(`${this.baseUrl}/users/1`)
    .pipe(
      tap( auth => this._authUser = auth ),
      tap(auth => localStorage.setItem('token', auth.id ))
      );
  }

  //arreglar 
  signin(name: string,address: string,email: string, password: string): Observable<User>{
    return this.http.get<User>(`${this.baseUrl}/users/1`)
    .pipe(
      tap( auth => this._authUser = auth ),
      tap(auth => localStorage.setItem('token', auth.id ))
      );
  }


  logout(){
    localStorage.removeItem('token');
    this._authUser = undefined;
  }
}
