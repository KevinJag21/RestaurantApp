import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.prod';
import { Dish } from '../interfaces/dish.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl: string = environment.baseUrl;
  constructor(private http : HttpClient) { }

  getAvailableFood(): Observable<Dish[]>{
    return this.http.get<Dish[]>(`${this.baseUrl}/dishes`);
  }
}
