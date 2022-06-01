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

  public getWineById(id: number | undefined): Observable<Wine> {
    return this.http.get<Wine>(`${this.apiServerUrl}/wine/find/${id}`);
  }

  public deleteWine(id: number){
    return this.http.delete<Wine>(`${this.apiServerUrl}/wine/delete/${id}`);
  }

  public addWine(wine: { imgUrl: any; country: any; price: any; name: any; description: any; new_product: any; category: any; mark: any }): Observable<Wine> {
    return this.http.post<Wine>(`${this.apiServerUrl}/wine/add`, wine);
  }

  public updateWine(id: number | undefined, wine: Wine[] | undefined): Observable<Object>{
    return this.http.put(`${this.apiServerUrl}/wine/update/${id}`, wine);
  }

  public getAllOpinion(): Observable<Opinion[]> {
    return this.http.get<Opinion[]>(`${this.apiServerUrl}/opinion/all`);
  }
  public addOpinion(opinion: Opinion): Observable<Opinion> {
    return this.http.post<Opinion>(`${this.apiServerUrl}/opinion/add`, opinion);
  }
}
