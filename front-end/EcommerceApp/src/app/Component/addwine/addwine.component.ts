import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {HttpService} from "../../Services/http.service";
import {HttpWineService} from "../../Services/http-wine.service";

@Component({
  selector: 'app-addwine',
  templateUrl: './addwine.component.html',
  styleUrls: ['./addwine.component.scss']
})
export class AddwineComponent implements OnInit {

  addWineForm = new FormGroup({});

  constructor(private fb: FormBuilder, private httpWine: HttpWineService) { }

  ngOnInit(): void {
    this.WineForm();
  }

  WineForm() {
    this.addWineForm = this.fb.group({
      name: '',
      mark: '',
      category: '',
      price: '',
      country: '',
      description: '',
      imgUrl: '',
      new_product: '',
    })
  }
  addWine() {
    const newWine = {
      name: this.addWineForm.value.name,
      mark: this.addWineForm.value.mark,
      category: this.addWineForm.value.category,
      price: this.addWineForm.value.price,
      country: this.addWineForm.value.country,
      description: this.addWineForm.value.description,
      imgUrl: this.addWineForm.value.imgUrl,
      new_product: this.addWineForm.value.new_product
    }
    this.httpWine.addWine(newWine).subscribe(
      success => console.log('success: ', success),
      error => console.log('error')
    );
    this.addWineForm.reset();
  }


}
