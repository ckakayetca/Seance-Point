import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewSeanceComponent } from './new-seance/new-seance.component';
import { SeanceDetailsComponent } from './seance-details/seance-details.component';
import { SeanceEditComponent } from './seance-edit/seance-edit.component';
import { SeancesComponent } from './seances/seances.component';

const routes: Routes = [
    {path: '', pathMatch: 'full', component: SeancesComponent},
    {path: 'create', component: NewSeanceComponent},
    {path: ':id', component: SeanceDetailsComponent},
    {path: ':id/edit', component: SeanceEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeanceRoutingModule {}
