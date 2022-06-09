import { Component, OnInit } from '@angular/core';
import {Wine} from "../../Wine";
import {HttpService} from "../../Services/http.service";
import {HttpWineService} from "../../Services/http-wine.service";

@Component({
  selector: 'app-dessert-wine',
  templateUrl: './dessert-wine.component.html',
  styleUrls: ['./dessert-wine.component.scss']
})
export class DessertWineComponent implements OnInit {

  public wines: Wine[] | undefined;

  private dessert: string | undefined = "dessert-wine";

  constructor(private httpWine: HttpWineService) { }

  ngOnInit(): void {
    this.getWineByCategory(this.dessert)

  }

  getWineByCategory(dessert: string | undefined){

    this.httpWine.getWineByCategory(dessert).subscribe(
      response =>   console.log('success'),
      error => console.log('error')
    );
  }

}
