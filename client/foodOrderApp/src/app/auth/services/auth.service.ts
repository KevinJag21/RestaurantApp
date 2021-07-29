import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable , of} from 'rxjs';
import { environment } from '../../../environments/environment';
import { User } from '../interfaces/user.interface';
import { map, tap } from 'rxjs/operators';
import { AuthInterface, AuthResponse } from '../interfaces/auth-user.interface';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl : string = environment.baseUrl ;
  private testUrl : string = 'http://proyectoperl-001-site1.ftempurl.com/api';
  private _authUser : AuthResponse | undefined;

  get auth(): AuthResponse {
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
/*
  login(email: string, password: string): Observable<User>{
    return this.http.get<User>(`${this.baseUrl}/users/1`)
    .pipe(
      tap( auth => this._authUser = auth ),
      tap(auth => localStorage.setItem('token', auth.id ))
      );
  }*/

  login2(authUserInfo : AuthInterface): Observable<AuthResponse>{
    return this.http.post<AuthResponse>(`${this.testUrl}/client/login`, authUserInfo)
    .pipe(
      tap( response => {
        if(response.success){
          localStorage.setItem('token', response.id );
          this._authUser = response;
        }
      })
      );
  }

  //arreglar 
  
  signin(name: string,address: string,email: string, password: string): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/client/signin`,{});
  }


  logout(){
    localStorage.removeItem('token');
    this._authUser = undefined;
    //this.login("","").subscribe( rest => {console.log(rest)});
  }
}
