import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { MySeancesComponent } from './my-seances/my-seances.component';
import { MyAppointmentsComponent } from './my-appointments/my-appointments.component';
import { authGuardFn } from '../core/guards/auth.activate';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [authGuardFn] },
  { path: 'profile/edit', component: ProfileEditComponent, canActivate: [authGuardFn]  },
  { path: 'my-seances', component: MySeancesComponent, canActivate: [authGuardFn]  },
  { path: 'my-appointments', component: MyAppointmentsComponent, canActivate: [authGuardFn]  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
