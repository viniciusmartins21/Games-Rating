import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestLogin } from '../resources/models/RequestLogin';
import { ResponseLogin } from '../resources/models/ResponseLogin';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // private apiUrl = 'https://api-labs.tindin.com.br/auth'

  constructor(private httpClient: HttpClient) {}

  public doLogin(requestLogin: RequestLogin): Observable<ResponseLogin> {
    return this.httpClient.post<ResponseLogin>(
      'https://api-labs.tindin.com.br/auth',
      requestLogin
    );
  }
}
