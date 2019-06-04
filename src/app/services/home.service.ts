import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  baseUrl = 'http://eniso.info/ws/core/wscript?s=Return(bean(%27core%27).findFullArticlesByDisposition(1,true,%22Welcome%22))';
  constructor(private http: HttpClient) { }
  gerArticles(sessionID: string): Observable<any> {
    const headers = new HttpHeaders();
    headers.append('X-JSESSIONID', sessionID);
    return this.http.get(this.baseUrl + '&jsessionid=' + sessionID, { headers, observe: 'response' });

  }
}
