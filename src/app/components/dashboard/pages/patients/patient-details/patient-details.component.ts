import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../../../../services';
import { ActivatedRoute } from '@angular/router';
import { PatientsResponse } from '../../../../../models';

export interface FamilyState {
  value: string;
  viewValue: string;
}
export interface CitizenshipState {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css'],
})
export class PatientDetailsComponent implements OnInit {
  familyStatesOptions: FamilyState[] = [
    { value: 'value-1', viewValue: 'დაოჯახებული' },
    { value: 'value-2', viewValue: 'დასაოჯახებელი' },
    { value: 'value-3', viewValue: 'განქორწინებული' },
  ];

  citizenships: CitizenshipState[] = [
    { value: 'value-1', viewValue: 'Georgia' },
    { value: 'value-2', viewValue: 'Germany' },
    { value: 'value-3', viewValue: 'France' },
  ];

  // public PatientId;
  PatientData = [];
  dataLoaded: Promise<boolean>;

  constructor(
    private route: ActivatedRoute,
    private tabledataService: PatientService,
  ) {}

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    //this.PatientId = id;
    this.tabledataService.getPatient(id).subscribe(data => {
      // console.log(data.data);
      this.PatientData = data.data;
      this.dataLoaded = Promise.resolve(true);
    });
  }
}
