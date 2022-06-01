import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../Services/http.service";
import {Wine} from "../../Wine";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  isMenuOpened: boolean = false;
    wines: Wine[] | undefined;
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

  toggleMenu(): void {
    this.isMenuOpened = !this.isMenuOpened;
  }

  clickedOutside(): void {
    this.isMenuOpened = false;
  }
}

