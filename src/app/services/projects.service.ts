import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  //projects

  baseUrl = 'http://eniso.info/ws/core/wscript?s=Return(bean(%27apbl%27).findTeamsBySession("17"))';
  //  http.get(this.url2+'.findTeamsBySession('+session+'))')
  constructor(private http: HttpClient, private authService: AuthService) {
  }

  getTeamsBySession(): Observable<any> {
    const sessionID = this.authService.sessionID;
    const headers = new HttpHeaders();
    headers.append('X-JSESSIONID', sessionID);
    return this.http.get(this.baseUrl + '&jsessionid=' + sessionID, { headers, observe: 'response' });
  }

  getTeams() {
    this.getTeamsBySession().subscribe(data => {
      if (data.body.$error) {
        console.log('error');

      }
      else {
        console.log(data.body.$1);
        
        return data.body.$1

      }

    })
  }
}
