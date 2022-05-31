import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Wine} from "../Wine";
import {Opinion} from "../Opinion";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

    private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getWine(): Observable<Wine[]> {
    return this.http.get<Wine[]>(`${this.apiServerUrl}/wine/all`);
  }
  public getAllOpinion(): Observable<Opinion[]> {
    return this.http.get<Opinion[]>(`${this.apiServerUrl}/wine/all`);
  }
}
