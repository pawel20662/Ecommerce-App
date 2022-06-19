import { Component, OnInit } from '@angular/core';
import {Wine} from "../../Wine";
import {HttpWineService} from "../../services/http-wine.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sparkling-wine',
  templateUrl: './sparkling-wine.component.html',
  styleUrls: ['./sparkling-wine.component.scss']
})
export class SparklingWineComponent implements OnInit {

  public wines: Wine[] | undefined;

  private sparkling: string | undefined = "sparkling-wine";

  constructor(private httpWine: HttpWineService, private router: Router) { }

  ngOnInit(): void {
    this.getWineByCategory(this.sparkling);

  }

  getWineByCategory(sparkling: string | undefined){

    this.httpWine.getWineByCategory(sparkling).subscribe(
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
