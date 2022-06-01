import {Component, Input, OnInit} from '@angular/core';
import {Wine} from "../../Wine";
import {HttpService} from "../../Services/http.service";

@Component({
  selector: 'app-new-wine',
  templateUrl: './new-wine.component.html',
  styleUrls: ['./new-wine.component.scss']
})
export class NewWineComponent implements OnInit {

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
