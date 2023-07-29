import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewSeanceComponent } from './new-seance/new-seance.component';
import { SeanceDetailsComponent } from './seance-details/seance-details.component';
import { SeanceEditComponent } from './seance-edit/seance-edit.component';
import { SeancesComponent } from './seances/seances.component';
import { SeanceRoutingModule } from './seance-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    NewSeanceComponent,
    SeanceDetailsComponent,
    SeanceEditComponent,
    SeancesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports: [
    SeanceRoutingModule
  ]
})
export class SeanceModule { }
