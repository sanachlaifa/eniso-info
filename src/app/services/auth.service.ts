import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  sessionID = '';
  signInUrl = 'http://eniso.info/ws/core/login/';
  logOutUrl = 'https://eniso.info/ws/core/logout';

  constructor(private http: HttpClient) {

  }
  getUser(username, password): Observable<any> {
    return this.http.get(this.signInUrl + username + '?password='
      + password);
  }
  logout() {
    return this.http.get(this.logOutUrl);
  }
}
