import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewSeanceComponent } from './new-seance/new-seance.component';
import { SeanceDetailsComponent } from './seance-details/seance-details.component';
import { SeanceEditComponent } from './seance-edit/seance-edit.component';
import { SeancesComponent } from './seances/seances.component';
import { authGuardFn } from '../core/guards/auth.activate';

const routes: Routes = [
    {path: '', pathMatch: 'full', component: SeancesComponent},
    {path: 'create', component: NewSeanceComponent, canActivate: [authGuardFn] },
    {path: ':id', component: SeanceDetailsComponent},
    {path: ':id/edit', component: SeanceEditComponent, canActivate: [authGuardFn] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeanceRoutingModule {}
