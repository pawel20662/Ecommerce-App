import { Component, OnInit } from '@angular/core';
import {Opinion} from "../../Opinion";
import {HttpOpinionService} from "../../services/http-opinion.service";
import {flatMap} from "rxjs/internal/operators";

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
    this.httpOpinion.deleteOpinion(id)
      .pipe(flatMap((success) =>  this.httpOpinion.getAllOpinion()))
      .subscribe(
      opinion => {this.getOpinion()},
      error => console.log('error')
    );
  }
}

