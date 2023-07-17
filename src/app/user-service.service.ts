import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = "http://localhost:7000/api";

  constructor(private http: HttpClient) { }

  getUsername(): Observable<String> {                                     
  
    const jwt=localStorage.getItem('jwtToken');
    const headers=new HttpHeaders().set('Authorization',`Bearer ${jwt}`) 
  
    return this.http.get<any>(`${this.url}/username`,{headers});
  }
}