import { Component, OnInit } from '@angular/core';
import {Wine} from "../../Wine";
import {HttpWineService} from "../../Services/http-wine.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-red-wine',
  templateUrl: './red-wine.component.html',
  styleUrls: ['./red-wine.component.scss']
})
export class RedWineComponent implements OnInit {

  public wines: Wine[] | undefined;

  private red: string | undefined = "red-wine";

  constructor(private httpWine: HttpWineService, private router: Router) { }

  ngOnInit(): void {
    this.getWineByCategory(this.red)

  }

  getWineByCategory(red: string | undefined){

    this.httpWine.getWineByCategory(red).subscribe(
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
