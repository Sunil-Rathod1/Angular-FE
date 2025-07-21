import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl: string = 'http://localhost:5000/api';
  constructor(private http: HttpClient) {}

  public newUser(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/register`, user);
  }
  public loginUser(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/login`, user);
  }
}
