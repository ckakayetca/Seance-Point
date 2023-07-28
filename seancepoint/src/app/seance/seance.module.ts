import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewSeanceComponent } from './new-seance/new-seance.component';
import { SeanceDetailsComponent } from './seance-details/seance-details.component';
import { MySeancesComponent } from './my-seances/my-seances.component';
import { SeanceEditComponent } from './seance-edit/seance-edit.component';
import { SeancesComponent } from './seances/seances.component';
import { SeanceRoutingModule } from './seance-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    NewSeanceComponent,
    SeanceDetailsComponent,
    MySeancesComponent,
    SeanceEditComponent,
    SeancesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    MySeancesComponent,
    SeanceRoutingModule
  ]
})
export class SeanceModule { }
