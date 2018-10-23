import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { URLS } from '../config/app.config';
import { RoleResponse } from './../models';

@Injectable()
export class RoleService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<RoleResponse>(URLS.roles);
  }
}
