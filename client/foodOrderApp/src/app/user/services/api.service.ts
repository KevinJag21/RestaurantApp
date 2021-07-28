import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.prod';
import { Dish } from '../interfaces/dish.interface';
import { DishR } from '../interfaces/dishResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl: string = environment.baseUrl;
  private tmp : string = 'http://expressproject-001-site1.itempurl.com/api';
  constructor(private http : HttpClient) { }

  getAvailableFood(): Observable<Dish[]>{
    return this.http.get<Dish[]>(`${this.baseUrl}/dishes`);
  }
  
  getRealFood(): Observable<DishR[]>{
    return this.http.get<DishR[]>(`${this.tmp}/dish`);
  }
}
