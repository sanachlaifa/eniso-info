import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stutdent } from '../interfaces/stutdent';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  sessionID;
  grade;
  signInUrl = 'http://eniso.info/ws/core/login/';
  logOutUrl = 'https://eniso.info/ws/core/logout';
  user: Stutdent;
  constructor(private http: HttpClient) {

  }


  getUser(username, password): Observable<any> {
    return this.http.get(this.signInUrl + username + '?password='
      + password);
  }

  getUserGrade() {
    const fullName = this.user.userFullName;
    return fullName.substr(fullName.indexOf('IA'));
  }

  logout() {
    return this.http.get(this.logOutUrl);
  }
}
