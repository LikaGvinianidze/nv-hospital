import { Component, OnInit, Output, EventEmitter, ElementRef, Input, ViewChild  } from '@angular/core';
import { PatientService } from '../../../../../services';
import { Response } from 'selenium-webdriver/http';
import { PatientsResponse } from '../../../../../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datatable-patients',
  templateUrl: './datatable-patients.component.html',
  styleUrls: ['./datatable-patients.component.scss'],
})
export class DatatablePatientsComponent {

  @ViewChild('SearchInput') public SearchInput: ElementRef;
  tabledatas = [];
  p = 1;
  collection: any[] = this.tabledatas;
  constructor(
    private tabledataService: PatientService,
    private router: Router
  ) {}

  ngOnInit() {
    this.tabledataService.getPatients().subscribe(data => {
      this.tabledatas = data.data;
    });
  }
  onSelectPatient(tabledata) {
    this.router.navigate(['/dashboard/patients', tabledata.id]);
    console.log(tabledata.id);
  }



    public ValueChanged(event) {
      const Value = event.target.value;
      this.tabledataService.getPatient(Value).subscribe(
        data => {
          console.log('good', data);
        },
        err => {
          console.log('bad', err);
        }
      );
    }
}
