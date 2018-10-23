import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from './../../models';
import { UserService } from './../../services';

@Component({ templateUrl: 'users.component.html' })
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService
      .getAll()
      .pipe(first())
      .subscribe(users => {
        console.log(users);
        this.users = users;
      });
  }
}
