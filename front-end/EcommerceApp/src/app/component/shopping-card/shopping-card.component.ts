import { Component, OnInit } from '@angular/core';
import {HttpWineService} from "../../services/http-wine.service";
import {Wine} from "../../Wine";

@Component({
  selector: 'app-shopping-card',
  templateUrl: './shopping-card.component.html',
  styleUrls: ['./shopping-card.component.scss']
})
export class ShoppingCardComponent implements OnInit {

  wines: Wine[] | undefined;

  constructor(private httpWine: HttpWineService) {
  }

  ngOnInit(): void {
    this.allWine();
  }

  allWine() {
    this.httpWine.getWine().subscribe(
      (response: Wine[]) => {
        this.wines = response;
        console.log(this.wines);
      }
    )
  }

}
