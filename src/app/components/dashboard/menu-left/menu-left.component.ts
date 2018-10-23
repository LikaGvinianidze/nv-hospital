import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-menu-left',
  templateUrl: './menu-left.component.html',
  styleUrls: ['./menu-left.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class MenuLeftComponent implements OnInit {
  menulists = [
    {
      menuName: 'მთავარი გვერდი',
      url: '/dashboard',
      icon: 'fa fa-align-justify'
    },
    {
      menuName: 'სერვისები',
      url: '/dashboard/services',
      icon: 'fa fa-envelope'
    },
    { menuName: 'პაცოენტები', url: '/dashboard/patients', icon: 'fa fa-user' }
  ];

  constructor() {}

  ngOnInit() {}
}
