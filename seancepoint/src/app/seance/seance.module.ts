import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewSeanceComponent } from './new-seance/new-seance.component';
import { SeanceDetailsComponent } from './seance-details/seance-details.component';
import { MySeancesComponent } from './my-seances/my-seances.component';



@NgModule({
  declarations: [
    NewSeanceComponent,
    SeanceDetailsComponent,
    MySeancesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SeanceModule { }
