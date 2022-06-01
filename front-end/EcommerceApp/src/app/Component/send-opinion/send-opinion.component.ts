import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {HttpService} from "../../Services/http.service";

@Component({
  selector: 'app-send-opinion',
  templateUrl: './send-opinion.component.html',
  styleUrls: ['./send-opinion.component.scss']
})
export class SendOpinionComponent implements OnInit {

  OpinionForm = new FormGroup({});
  constructor(private fb: FormBuilder, private httpService: HttpService) { }

  ngOnInit(): void {
    this.Opinion()
  }

  Opinion() {
    this.OpinionForm = this.fb.group({
      name: '',
      lastName: '',
      description: '',
    })
  }
  addOpinion() {
    const newOpinion = {
        name: this.OpinionForm.value.name,
        lastName: this.OpinionForm.value.lastName,
        description: this.OpinionForm.value.description,
    }
    this.httpService.addOpinion(newOpinion).subscribe(
      success => console.log('success: ', success),
      error => console.log('error')
    );
    this.OpinionForm.reset();
  }
}
