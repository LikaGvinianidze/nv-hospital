import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { URLS } from '../config/app.config';

@Injectable()
export class RegistrationService {
  constructor(private http: HttpClient) {}

  register(email: string, password: string, name: string) {
    return this.http
      .post<any>(URLS.registration, {
        email: email,
        password: password,
        name: name,
      })
      .pipe(
        map((res: any) => {
          if (res && res.access_token) {
            localStorage.setItem(
              'currentUser',
              JSON.stringify({ email, token: res.access_token }),
            );
          }
        }),
      );
  }
}
