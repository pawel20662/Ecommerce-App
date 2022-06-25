import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpUserService} from "../../services/http-user.service";
import {User} from "../../User";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss']
})
export class SingInComponent implements OnInit {

  loginUserForm = new FormGroup({});
  hide = true;
  user: User | undefined;


  constructor(private router: Router, private httpUser: HttpUserService, private  fb: FormBuilder, public auth: AuthService) { }

  ngOnInit(): void {
    this.loginUser();
  }

  loginUser(){
    this.loginUserForm = this.fb.group({
      emailId: ['', Validators.email],
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
      (userResponse: User) => {
        this.user = userResponse;
        console.log(this.user);
        alert("Logged")
      },
        error => alert("Sorry Please enter correct User")
    )

  }

}


