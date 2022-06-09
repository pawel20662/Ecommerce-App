import { Component, OnInit } from '@angular/core';
import {Wine} from "../../Wine";
import {HttpWineService} from "../../Services/http-wine.service";

@Component({
  selector: 'app-white-wine',
  templateUrl: './white-wine.component.html',
  styleUrls: ['./white-wine.component.scss']
})
export class WhiteWineComponent implements OnInit {

  public wines: Wine[] | undefined;

  private white: string | undefined = "white-wine";

  constructor(private httpWine: HttpWineService) { }

  ngOnInit(): void {
    this.getWineByCategory(this.white)

  }

  getWineByCategory(white: string | undefined){

    this.httpWine.getWineByCategory(white).subscribe(
      response =>   console.log('success'),
      error => console.log('error')
    );
  }
  //todo nie działa poprawnie (dane przychodzą z backendu), problem z subscribe\\
}
