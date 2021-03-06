import { Component, OnInit } from '@angular/core';
import {Wine} from "../../Wine";
import {HttpWineService} from "../../services/http-wine.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dessert-wine',
  templateUrl: './dessert-wine.component.html',
  styleUrls: ['./dessert-wine.component.scss']
})
export class DessertWineComponent implements OnInit {

  public wines: Wine[] | undefined;

  private dessert: string | undefined = "dessert-wine";

  constructor(private httpWine: HttpWineService, private router: Router) { }

  ngOnInit(): void {
    this.getWineByCategory(this.dessert)

  }

  getWineByCategory(dessert: string | undefined){

    this.httpWine.getWineByCategory(dessert).subscribe(
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
