import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../Services/http.service";
import {Wine} from "../../Wine";
import {HttpWineService} from "../../Services/http-wine.service";

@Component({
  selector: 'app-sparkling-wine',
  templateUrl: './sparkling-wine.component.html',
  styleUrls: ['./sparkling-wine.component.scss']
})
export class SparklingWineComponent implements OnInit {

  public wines: Wine[] | undefined;

  private sparkling: string | undefined = "sparkling-wine";

  constructor(private httpWine: HttpWineService ) { }

  ngOnInit(): void {
    this.getWineByCategory(this.sparkling)

  }

  getWineByCategory(sparkling: string | undefined){

    this.httpWine.getWineByCategory(sparkling).subscribe(
      response =>   console.log('success'),
      error => console.log('error')
    );
  }

}
