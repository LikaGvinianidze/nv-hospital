import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { URLS } from '../config/app.config';
import { User } from '../models';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<User[]>(URLS.users);
  }
}
