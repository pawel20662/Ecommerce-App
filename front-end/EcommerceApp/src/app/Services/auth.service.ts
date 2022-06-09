import { Injectable } from '@angular/core';

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
