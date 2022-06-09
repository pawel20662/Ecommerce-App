import { Component, OnInit } from '@angular/core';
import {Wine} from "../../Wine";
import {HttpService} from "../../Services/http.service";
import {HttpWineService} from "../../Services/http-wine.service";

@Component({
  selector: 'app-rose-wine',
  templateUrl: './rose-wine.component.html',
  styleUrls: ['./rose-wine.component.scss']
})
export class RoseWineComponent implements OnInit {

  public wines: Wine[] | undefined;

  private rose: string | undefined = "rose-wine";

  constructor(private httpWine: HttpWineService) { }

  ngOnInit(): void {
    this.getWineByCategory(this.rose)

  }

  getWineByCategory(rose: string | undefined){

    this.httpWine.getWineByCategory(rose).subscribe(
      response =>   console.log('success'),
      error => console.log('error')
    );
  }

}
