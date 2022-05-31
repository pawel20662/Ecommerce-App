import { Component, OnInit } from '@angular/core';
import {Wine} from "../../Wine";
import {HttpService} from "../../Services/http.service";

@Component({
  selector: 'app-admin-all-wines',
  templateUrl: './admin-all-wines.component.html',
  styleUrls: ['./admin-all-wines.component.scss']
})
export class AdminAllWinesComponent implements OnInit {

  public wines: Wine[] | undefined;
  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.getWine();
  }

  getWine(): void {
    this.httpService.getWine().subscribe(
      (response: Wine[]) => {
        this.wines = response;
        console.log(this.wines);
      }
    )
  }
}
