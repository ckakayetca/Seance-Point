import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewSeanceComponent } from './new-seance/new-seance.component';
import { SeanceDetailsComponent } from './seance-details/seance-details.component';
import { MySeancesComponent } from './my-seances/my-seances.component';
import { SeanceEditComponent } from './seance-edit/seance-edit.component';
import { SeancesComponent } from './seances/seances.component';
import { SeanceRoutingModule } from './seance-routing.module';



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
  ],
  exports: [
    MySeancesComponent,
    SeanceRoutingModule
  ]
})
export class SeanceModule { }
