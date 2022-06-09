import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Opinion} from "../Opinion";

@Injectable({
  providedIn: 'root'
})
export class HttpOpinionService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getAllOpinion(): Observable<Opinion[]> {
    return this.http.get<Opinion[]>(`${this.apiServerUrl}/opinion/all`);
  }

  public addOpinion(opinion: { lastName: any; name: any; description: any }): Observable<Opinion> {
    return this.http.post<Opinion>(`${this.apiServerUrl}/opinion/add`, opinion);
  }

  public deleteOpinion(id: number){
    return this.http.delete<Opinion>(`${this.apiServerUrl}/opinion/delete/${id}`);
  }
}
