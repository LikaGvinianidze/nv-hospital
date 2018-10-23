import { Component, OnInit } from '@angular/core';
import { DatatablePatientsComponent } from './datatable-patients';
import { PatientsResponse } from '../../../../models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css'],
})
export class PatientsComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {}

  
}
