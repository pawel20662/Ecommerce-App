import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {PopUpComponent} from "../pop-up/pop-up.component";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isMenuOpen = false;

  constructor(public auth: AuthService, public dialogRef: MatDialog) {
  }

  ngOnInit(): void {

  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }


  openDialog(): void {
    this.dialogRef.open(PopUpComponent);
  }
}
