import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../User";

@Injectable({
  providedIn: 'root'
})
export class HttpUserService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public addUser(newUser: { password: any; emailId: any; userName: any }): Observable<User>{
    return this.http.post<User>(`${this.apiServerUrl}/api/register`, newUser);
  }

  public loginUser(user: { password: string; emailId: string }): Observable<User> {
    return this.http.post<User>(`${this.apiServerUrl}/api/login`, user);
  }

  public getAllUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.apiServerUrl}/api/allUsers`);
  }

  public deleteUser(id: number) {
    return this.http.delete<User>(`${this.apiServerUrl}/api/delete/${id}`)
  }
}
