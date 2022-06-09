import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {HttpUserService} from "../../Services/http-user.service";

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss']
})
export class SingInComponent implements OnInit {

  loginUserForm = new FormGroup({});
  hide = true;


  constructor(private router: Router, private httpUser: HttpUserService, private  fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginUser();
  }

  loginUser(){
    this.loginUserForm = this.fb.group({
      emailId: '',
      password: ''
    })
  }

  goToRegister() {
    this.router.navigate(['register-user']);
  }


  checkUserLogin() {
    const checkUser = {
      emailId: this.loginUserForm.value.emailId,
      password: this.loginUserForm.value.password
    }

    this.httpUser.loginUser(checkUser).subscribe(
      success => alert("Login Successfully"),
        error => alert("Sorry Please enter correct User")
    )

  }
}


