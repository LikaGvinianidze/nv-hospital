import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URLS } from '../config/app.config';
import { PatientsResponse, RegionsResponse, Municipalities } from './../models';
import { PatientIdResponse } from './../models';

@Injectable()
export class PatientService {
  constructor(private http: HttpClient) {}

  getPatients() {
    return this.http.get<PatientsResponse>(URLS.patients);
  }

  getSpecificPatient(query: string) {
    return this.http.get<PatientsResponse>(URLS.patientsById + query);
  }

  getRegion() {
    return this.http.get<RegionsResponse>(URLS.regions);
  }

  getMunicipalities() {
    return this.http.get<Municipalities>(URLS.municipalities);
  }
  
  getPatient(id) {
    return this.http.get<PatientIdResponse>(URLS.patient + id);
  }
}
