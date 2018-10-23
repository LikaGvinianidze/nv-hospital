import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home';
import { LoginComponent } from './components/login';
import { RegisterComponent } from './components/register';
import { UsersComponent } from './components/users';
import { RolesComponent } from './components/roles';
import { DashboardComponent } from './components/dashboard';
import { PatientsComponent } from './components/dashboard/pages/patients';
import { ServicesComponent } from './components/dashboard/pages/services';
import { PatientDetailsComponent } from './components/dashboard/pages/patients/patient-details/patient-details.component';

import { AuthGuard } from './guards';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'services',
        component: ServicesComponent,
      },
      {
        path: 'patients',
        component: PatientsComponent,
      },
      {
        path: 'patients/:id',
        component: PatientDetailsComponent,
      },
      {
        path: 'patient-detail',
        component: PatientDetailsComponent,
      },
    ],
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'roles',
    component: RolesComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

export const routing = RouterModule.forRoot(appRoutes);
export const routingComponents = [
  DashboardComponent,
  PatientsComponent,
  PatientDetailsComponent,
];
