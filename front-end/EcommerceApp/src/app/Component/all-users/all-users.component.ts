import { Component, OnInit } from '@angular/core';
import {HttpUserService} from "../../Services/http-user.service";
import {User} from "../../User";

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit {

  public users: User[] | undefined;

  constructor(private httpUser: HttpUserService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(){
    this.httpUser.getAllUsers().subscribe(
      (response: User[]) => {
        this.users = response;
      },
      error => console.log("error")
    );
  }
}
