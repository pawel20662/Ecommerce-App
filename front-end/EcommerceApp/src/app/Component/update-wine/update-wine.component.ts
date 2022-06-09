import { Component, OnInit } from '@angular/core';


import {ActivatedRoute, Router} from "@angular/router";
import {Wine} from "../../Wine";
import {FormBuilder, FormGroup} from "@angular/forms";
import {HttpWineService} from "../../Services/http-wine.service";

@Component({
  selector: 'app-update-wine',
  templateUrl: './update-wine.component.html',
  styleUrls: ['./update-wine.component.scss']
})
export class UpdateWineComponent implements OnInit {

  id: number | undefined;
  wines: Wine[] | undefined;
  updateForm = new FormGroup({});

  constructor(private httpWine: HttpWineService, public routeActive: ActivatedRoute, private fb: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    this.id = this.routeActive.snapshot.params['id'];
    this.getWineById();
    this.update();
  }
  update(){
    this.updateForm = this.fb.group({
      id: '',
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

  updateWine() {
    const updateOldWine  = {
      id: this.updateForm.value.id,
      name: this.updateForm.value.name,
      mark: this.updateForm.value.mark,
      category: this.updateForm.value.category,
      price: this.updateForm.value.price,
      country: this.updateForm.value.country,
      description: this.updateForm.value.description,
      imgUrl: this.updateForm.value.imgUrl,
      new_product: this.updateForm.value.new_product,
    }
    this.httpWine.updateWine(updateOldWine, updateOldWine.id).subscribe(
      success => { alert("success"), this.router.navigate(['admin-panel'])},
      error => console.log('error')
    );
  }

  getWineById() {
    this.httpWine.getWineById(this.id).subscribe(
      wine => { this.updateForm.get("id")?.setValue(wine.id),
                     this.updateForm.get("name")?.setValue(wine.name),
                     this.updateForm.get("mark")?.setValue(wine.mark),
                     this.updateForm.get("category")?.setValue(wine.category),
                     this.updateForm.get("price")?.setValue(wine.price),
                     this.updateForm.get("country")?.setValue(wine.country),
                     this.updateForm.get("description")?.setValue(wine.description),
                     this.updateForm.get("imgUrl")?.setValue(wine.imgUrl),
                     this.updateForm.get("new_product")?.setValue(wine.new_product) },
      error => console.log('error')
    );
  }

}
