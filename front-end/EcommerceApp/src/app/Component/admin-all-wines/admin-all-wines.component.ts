import {Component, Input, OnInit} from '@angular/core';
import {Wine} from "../../Wine";
import {HttpService} from "../../Services/http.service";

import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-admin-all-wines',
  templateUrl: './admin-all-wines.component.html',
  styleUrls: ['./admin-all-wines.component.scss']
})
export class AdminAllWinesComponent implements OnInit {

  public wines: Wine[] | undefined;


  constructor(private httpService: HttpService, private router: Router) { }

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

  deleteWine(id: number) {
    this.httpService.deleteWine(id).subscribe(
      success => console.log('success: ', success),
      error => console.log('error')
    );
  }

  goToUpdateWine(id: number){
    // this.updateWineService.updateWine.next(this.wines);
      this.router.navigate(['updateWine', id]);
  }
}
