import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Seance } from 'src/app/types/seance';

@Component({
  selector: 'app-seances',
  templateUrl: './seances.component.html',
  styleUrls: ['./seances.component.css'],
})
export class SeancesComponent implements OnInit{
  seanceList: Seance[] = [];
  hasSeances: boolean = false;
  isLoading: boolean = true;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getAll().subscribe((seances) => {
      this.seanceList = seances;
      if(seances.length > 0) {
        this.hasSeances = true;
      }
      this.isLoading = false;
    })
  }
}
