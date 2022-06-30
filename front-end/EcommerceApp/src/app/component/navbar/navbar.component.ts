import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {User} from "../../User";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isMenuOpen = false;
  constructor(private readonly auth: AuthService) { }

  ngOnInit(): void {

  }
toggleMenu(){
    this.isMenuOpen = !this.isMenuOpen;
}


}
