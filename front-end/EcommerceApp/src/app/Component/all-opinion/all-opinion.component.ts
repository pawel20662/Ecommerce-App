import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../Services/http.service";
import {Opinion} from "../../Opinion";

@Component({
  selector: 'app-all-opinion',
  templateUrl: './all-opinion.component.html',
  styleUrls: ['./all-opinion.component.scss']
})
export class AllOpinionComponent implements OnInit {

  public opinions: Opinion[] | undefined;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.getOpinion();
  }
  getOpinion(){
    this.httpService.getAllOpinion().subscribe(
      (response: Opinion[]) => {
        this.opinions = response;
        console.log(this.opinions);
      }
    )
  }
}
