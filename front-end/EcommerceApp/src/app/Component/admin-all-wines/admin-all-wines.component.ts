import {Component, Input, OnInit} from '@angular/core';
import {Wine} from "../../Wine";

import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {HttpWineService} from "../../Services/http-wine.service";

@Component({
  selector: 'app-admin-all-wines',
  templateUrl: './admin-all-wines.component.html',
  styleUrls: ['./admin-all-wines.component.scss']
})
export class AdminAllWinesComponent implements OnInit {

  public wines: Wine[] | undefined;


  constructor(private httpWine: HttpWineService, private router: Router) { }

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
    this.httpWine.deleteWine(id).subscribe(
      success => { this.getWine() }, //todo tak się tego nie robi \\
      error => console.log('error')
    );

  }

  goToUpdateWine(id: number){
    // this.updateWineService.updateWine.next(this.wines);
      this.router.navigate(['updateWine', id]);
  }
}
