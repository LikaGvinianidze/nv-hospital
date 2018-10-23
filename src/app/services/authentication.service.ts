import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { URLS } from '../config/app.config';

@Injectable()
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http
      .post<any>(URLS.auth, { email: email, password: password })
      .pipe(
        map((res: any) => {
          console.log(res);
          if (res && res.access_token) {
            localStorage.setItem(
              'currentUser',
              JSON.stringify({ email, token: res.access_token })
            );
          }
        })
      );
  }

  logout() {
    // remove user from local storage to log user out

    localStorage.removeItem('currentUser');
  }
}
