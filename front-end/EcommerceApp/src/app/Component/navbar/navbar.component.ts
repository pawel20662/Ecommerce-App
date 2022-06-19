import { Component, OnInit } from '@angular/core';
import {SampleService} from "../../services/sample-service";
import {stringify} from "@angular/compiler/src/util";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private readonly sampleService: SampleService) { }

  ngOnInit(): void {
  this.sampleService.sample
    .subscribe(sample => console.log(sample + "1"));
    this.sampleService.sample
      .subscribe(sample => console.log(sample + "2"));
  }

  send() {
    this.sampleService.sample.next("value");
  }

}
