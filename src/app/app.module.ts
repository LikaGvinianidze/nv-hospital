import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './guards';
import { JwtInterceptor, ErrorInterceptor } from './helpers';
import { MaterialModule } from './material';
import {
  AuthenticationService,
  RegistrationService,
  UserService,
  RoleService,
  PatientService,
} from './services';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { HomeComponent } from './components/home';
import { LoginComponent } from './components/login';
import { RegisterComponent } from './components/register';
import { HeaderComponent } from './components/dashboard/header';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UsersComponent } from './components/users/users.component';
import { RolesComponent } from './components/roles/roles.component';
import { MenuLeftComponent } from './components/dashboard/menu-left/menu-left.component';
import { ServicesComponent } from './components/dashboard/pages/services/services.component';
import { PatientsComponent } from './components/dashboard/pages/patients/patients.component';
import { MatFormFieldModule } from '@angular/material';
import { DatatablePatientsComponent } from './components/dashboard/pages/patients/datatable-patients/datatable-patients.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PatientDetailsComponent } from './components/dashboard/pages/patients/patient-details/patient-details.component';
import { FormsModule } from '@angular/forms';
import { PatientsSearchComponent } from './components/dashboard/pages/patients/datatable-patients/patients-search/patients-search.component';
import { MatSelectModule } from '@angular/material/select';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing,
    AngularFontAwesomeModule,
    MaterialModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    NgxPaginationModule,
    FormsModule,
    MatSelectModule,
    Ng2SearchPipeModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    UsersComponent,
    RolesComponent,
    HeaderComponent,
    MenuLeftComponent,
    ServicesComponent,
    PatientsComponent,
    DatatablePatientsComponent,
    PatientDetailsComponent,
    PatientsSearchComponent
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    UserService,
    RoleService,
    PatientService,
    RegistrationService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
