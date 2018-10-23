import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { Role, RoleResponse } from './../../models';
import { RoleService } from './../../services';

@Component({ templateUrl: 'roles.component.html' })
export class RolesComponent implements OnInit {
  roles: Role[] = [];

  constructor(private roleService: RoleService) {}

  ngOnInit() {

    this.roleService
      .getAll()
      .pipe(first())
      .subscribe(roles => {
        console.log(roles);
        this.roles = roles.data;
      });
  }
}
