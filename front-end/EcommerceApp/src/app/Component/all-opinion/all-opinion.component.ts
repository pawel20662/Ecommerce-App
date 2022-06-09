import { Component, OnInit } from '@angular/core';
import {Opinion} from "../../Opinion";
import {HttpOpinionService} from "../../Services/http-opinion.service";

@Component({
  selector: 'app-all-opinion',
  templateUrl: './all-opinion.component.html',
  styleUrls: ['./all-opinion.component.scss']
})
export class AllOpinionComponent implements OnInit {

  public opinions: Opinion[] | undefined;

  constructor(private httpOpinion: HttpOpinionService) { }

  ngOnInit(): void {
    this.getOpinion();
  }
  getOpinion(){
    this.httpOpinion.getAllOpinion().subscribe(
      (response: Opinion[]) => {
        this.opinions = response;
        console.log(this.opinions);
      }
    )
  }

  deleteOpinion(id: number) {
    this.httpOpinion.deleteOpinion(id).subscribe(
      opinion => {this.getOpinion()},
      error => console.log('error')
    );
  }
}

