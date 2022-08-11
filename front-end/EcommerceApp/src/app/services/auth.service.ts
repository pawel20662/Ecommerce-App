import { Injectable } from '@angular/core';
import {User} from "../User";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogged: boolean = false;
  currentlyLoggedUser: User | undefined;

  constructor() { }

  loggedUser(user: User){
this.isLogged = true;
this.currentlyLoggedUser = user;
}

logoutUser(){
this.isLogged = false;
}

}
