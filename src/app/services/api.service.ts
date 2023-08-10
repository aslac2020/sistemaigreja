import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cars } from '../model/Cars';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAllUsers():Observable<Cars[]>{
      return this.http.get<Cars[]>('http://localhost:8080/carros');
  }
}
