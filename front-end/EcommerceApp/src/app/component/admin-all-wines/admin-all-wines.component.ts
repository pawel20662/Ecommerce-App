import {Component, OnInit} from '@angular/core';
import {Wine} from "../../Wine";

import {Router} from "@angular/router";
import {HttpWineService} from "../../services/http-wine.service";
import {flatMap} from "rxjs/internal/operators";

@Component({
  selector: 'app-admin-all-wines',
  templateUrl: './admin-all-wines.component.html',
  styleUrls: ['./admin-all-wines.component.scss']
})
export class AdminAllWinesComponent implements OnInit {

  public wines: Wine[] | undefined;


  constructor(private httpWine: HttpWineService, private router: Router) {
  }

  ngOnInit(): void {
    this.getWine();
  }

  getWine(): void {
    this.httpWine.getWine().subscribe(
      (response: Wine[]) => {
        this.wines = response;
        console.log(this.wines);
      }
    )
  }

  deleteWine(id: number) {
    this.httpWine.deleteWine(id)
      .pipe(flatMap((success) => this.httpWine.getWine()))
      .subscribe(
        (response: Wine[] | undefined) => {
          this.wines = response;
          console.log(this.wines);
        }
    );
  }



  goToUpdateWine(id: number) {
    // this.updateWineService.updateWine.next(this.wines);
    this.router.navigate(['updateWine', id]);
  }
}
