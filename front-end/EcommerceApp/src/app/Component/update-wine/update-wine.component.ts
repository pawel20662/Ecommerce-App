import { Component, OnInit } from '@angular/core';

import {HttpService} from "../../Services/http.service";

import {ActivatedRoute} from "@angular/router";
import {Wine} from "../../Wine";

@Component({
  selector: 'app-update-wine',
  templateUrl: './update-wine.component.html',
  styleUrls: ['./update-wine.component.scss']
})
export class UpdateWineComponent implements OnInit {

  id: number | undefined;

  wine: Wine[] | undefined;



  constructor(private httpService: HttpService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.httpService.getWineById(this.id).subscribe(
      success => console.log('success: ', success),
      error => console.log('error')
    );
  }

  updateWine() {
    this.httpService.updateWine(this.id, this.wine).subscribe(
      success => console.log('success: ', success),
      error => console.log('error')
    );
  }
}
