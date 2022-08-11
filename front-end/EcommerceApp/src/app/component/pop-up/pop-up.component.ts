import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService, public dialogRef: MatDialog) { }

  ngOnInit(): void {
  }
  close(){
    this.dialogRef.closeAll();
    this.router.navigate(['sing-in']);
  }

  logged() {
    this.auth.logoutUser();
    this.router.navigate([`all-wine`])
    this.dialogRef.closeAll();
  }
}
