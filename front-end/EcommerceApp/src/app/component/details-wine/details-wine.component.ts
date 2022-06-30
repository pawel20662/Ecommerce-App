import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpWineService} from "../../services/http-wine.service";
import {Wine} from "../../Wine";


@Component({
  selector: 'app-details-wine',
  templateUrl: './details-wine.component.html',
  styleUrls: ['./details-wine.component.scss']
})
export class DetailsWineComponent implements OnInit {

  id: number | undefined;
  wine: Wine | undefined;

  constructor(private activeRouter: ActivatedRoute, private httpWine: HttpWineService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.activeRouter.snapshot.params["id"];
    this.getWineDetailsById();
  }

  getWineDetailsById() {
    this.httpWine.getWineById(this.id).subscribe(
      (response: Wine) => {
        this.wine = response;
        console.log(this.wine);
      },
      error => console.log("error")
    );
  }
  back(){
    this.router.navigate(['all-wine'])
  }
}
