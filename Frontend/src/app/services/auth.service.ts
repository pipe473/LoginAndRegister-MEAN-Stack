import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'http://localhost:3000/api'

  constructor(private http: HttpClient) { }

  register(user){
    return this.http.post<any>(this.url + '/signup', user);
  }
}
