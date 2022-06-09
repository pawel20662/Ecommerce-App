import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpService} from "../../Services/http.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {HttpUserService} from "../../Services/http-user.service";

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {
  hide = true;
  addNewUserForm = new FormGroup({});
  constructor(private router: Router, private httpUser: HttpUserService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.addUser();
  }

  goToSingIn() {
    this.router.navigate(['sing-in']);
  }
  addUser(){
    this.addNewUserForm = this.fb.group({
    emailId: '',
      userName: '',
      password: '',
    })
  }

  addNewUser() {
    const newUser = {
      emailId: this.addNewUserForm.value.emailId,
      userName: this.addNewUserForm.value.userName,
      password: this.addNewUserForm.value.password,

    }
    this.httpUser.addUser(newUser).subscribe(
      success => console.log('success:', success),
      error => console.log('error')
    )
  }
}
