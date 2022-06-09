import {Component, Input, OnInit} from '@angular/core';
import {Wine} from "../../Wine";
import {HttpWineService} from "../../Services/http-wine.service";

@Component({
  selector: 'app-new-wine',
  templateUrl: './new-wine.component.html',
  styleUrls: ['./new-wine.component.scss']
})
export class NewWineComponent implements OnInit {

     public wines: Wine[] | undefined;

    constructor(private httpWine: HttpWineService) { }

  ngOnInit(): void {
    this.getWine();
  }
  filterWineNew(){
     return  this.wines?.filter(wine => wine.new_product);
  }
  getWine(): void {
    this.httpWine.getWine().subscribe(
      (response: Wine[]) => {
        this.wines = response;
        console.log(this.wines);
      }
    )
  }

}
