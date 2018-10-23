import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../../../../../services';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
declare var $: any;
import { SlideInOutAnimation } from './animation';

@Component({
  selector: 'app-patients-search',
  templateUrl: './patients-search.component.html',
  styleUrls: ['./patients-search.component.scss'],
  animations: [SlideInOutAnimation],
})
export class PatientsSearchComponent implements OnInit {
  searchText: string;
  animationState = 'in';
  toggleShowDiv(divName: string) {
    if (divName === 'divA') {
      console.log(this.animationState);
      this.animationState = this.animationState === 'out' ? 'in' : 'out';
      console.log(this.animationState);
    }
  }
  regions = [];
  municipalities = [];
  constructor(private tabledataService: PatientService) {}

  ngOnInit() {
    this.tabledataService.getRegion().subscribe(data => {
      this.regions = data.data;
      // console.log(data.data);
    });

    this.tabledataService.getMunicipalities().subscribe(data => {
      this.municipalities = data.data;
      // console.log(data.data);
    });
    //  this.trimFirstChars();
  }
}
