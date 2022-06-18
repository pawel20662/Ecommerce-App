import { Component, OnInit } from '@angular/core';
import {Wine} from "../../Wine";
import {HttpWineService} from "../../services/http-wine.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-white-wine',
  templateUrl: './white-wine.component.html',
  styleUrls: ['./white-wine.component.scss']
})
export class WhiteWineComponent implements OnInit {

  public wines: Wine[] | undefined;

  private white: string | undefined = "white-wine";

  constructor(private httpWine: HttpWineService, private router: Router) { }

  ngOnInit(): void {
    this.getWineByCategory(this.white)

  }

  getWineByCategory(white: string | undefined){

    this.httpWine.getWineByCategory(white).subscribe(
      (response: Wine[]) => {
        this.wines = response;
      },
      error => console.log('error')
    );
  }
  goToDetails(id: number) {
    this.router.navigate(['details', id])
  }
}
