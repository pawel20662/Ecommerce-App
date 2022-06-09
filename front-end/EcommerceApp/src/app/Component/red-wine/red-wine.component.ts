import { Component, OnInit } from '@angular/core';
import {Wine} from "../../Wine";
import {HttpService} from "../../Services/http.service";
import {HttpWineService} from "../../Services/http-wine.service";

@Component({
  selector: 'app-red-wine',
  templateUrl: './red-wine.component.html',
  styleUrls: ['./red-wine.component.scss']
})
export class RedWineComponent implements OnInit {

  public wines: Wine[] | undefined;

  private red: string | undefined = "red-wine";

  constructor(private httpWine: HttpWineService) { }

  ngOnInit(): void {
    this.getWineByCategory(this.red)

  }

  getWineByCategory(red: string | undefined){

    this.httpWine.getWineByCategory(red).subscribe(
      response =>   console.log('success'),
      error => console.log('error')
    );
  }

}
