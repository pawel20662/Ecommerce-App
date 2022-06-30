import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpCardService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }


  public clearCard() {
    return this.http.delete(`${this.apiServerUrl}/card/clear`)
  }
}
