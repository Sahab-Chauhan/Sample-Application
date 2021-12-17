import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userData: Array<any> ;
  tocken: Number = 0;
  tockenDetails: String='';
  constructor() {
    this.userData = [
      {"username": 'admin', "password": 'admin' }
    ]
  }
  setTocken() {
    debugger
    this.tocken = new Date().getTime();
    localStorage.setItem('tocken', JSON.stringify(this.tocken));
  }
  validateUserTocken() {
    //this.tockenDetails = localStorage.getItem('tocken');
    //let _tocken = JSON.parse
    if (this.tockenDetails != null) {
      return true;
    } else {
      return false;
    }
}
//it should be from backend
validateUserDetails(user:any) {
  debugger
  let _userList = this.userData;
  for (var i = 0; i < _userList.length; i++) {
      if (user.username == this.userData[i]["username"] && user.password == this.userData[i]["password"]) {
        return true;
      }
    
    }
    return false;
}

logout() {
  localStorage.clear();
}

}
