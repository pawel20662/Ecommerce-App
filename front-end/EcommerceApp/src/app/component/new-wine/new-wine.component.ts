import {Component, OnInit} from '@angular/core';
import {Wine} from "../../Wine";
import {HttpWineService} from "../../services/http-wine.service";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {HttpCardService} from "../../services/http-card.service";

@Component({
  selector: 'app-new-wine',
  templateUrl: './new-wine.component.html',
  styleUrls: ['./new-wine.component.scss']
})
export class NewWineComponent implements OnInit {

  public wines: Wine[] | undefined;

  constructor(private httpWine: HttpWineService, private router: Router, public auth: AuthService, private httpCard: HttpCardService) {
  }

  ngOnInit(): void {
    this.getWine();
  }

  filterWineNew() {
    return this.wines?.filter(wine => wine.new_product);
  }

  getWine(): void {
    this.httpWine.getWine().subscribe(
      (response: Wine[]) => {
        this.wines = response;
        console.log(this.wines);
      }
    )
  }

  goToDetails(id: number) {
    this.router.navigate(['details', id])
  }

  addToCard(wineId: number) {
    this.httpCard.addToCard(this.auth.currentlyLoggedUser?.id, wineId ).subscribe();
  }
}
