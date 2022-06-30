import {Component, OnInit} from '@angular/core';
import {Wine} from "../../Wine";
import {HttpWineService} from "../../services/http-wine.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  isMenuOpened: boolean = false;

  wines: Wine[] | undefined;

  filterForm = new FormGroup({});

  constructor(private httpWine: HttpWineService, private fb: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    this.getWine();
    this.filter();
  }

  getWine(): void {
    this.httpWine.getWine().subscribe(
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

  filter() {
    this.filterForm = this.fb.group({
      category: '',
      minPrice: '',
      maxPrice: '',
      country: '',
    })
  }

  goToDetails(id: number) {
    this.router.navigate(['details', id])
  }

  filterSearch() {
    const filter = {
      category: this.filterForm.value.category,
      minPrice: this.filterForm.value.minPrice,
      maxPrice: this.filterForm.value.maxPrice,
      country: this.filterForm.value.country,
    }
    this.httpWine.filterWine(filter.category, filter.minPrice, filter.maxPrice, filter.country).subscribe(
      (response: Wine[]) => {
        this.wines = response;
        console.log(this.wines);
      }
    )
  }
}

