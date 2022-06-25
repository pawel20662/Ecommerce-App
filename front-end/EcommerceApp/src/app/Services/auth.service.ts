import { Injectable } from '@angular/core';
import {User} from "../User";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogged: boolean = false;

  constructor() { }

  loggedUser(){
this.isLogged = true;
}

logoutUser(){
this.isLogged = false;
}

}
