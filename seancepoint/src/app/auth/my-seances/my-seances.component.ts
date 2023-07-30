import { Component } from '@angular/core';
import { Seance } from '../../types/seance';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-my-seances',
  templateUrl: './my-seances.component.html',
  styleUrls: ['./my-seances.component.css']
})
export class MySeancesComponent {
  seanceList: Seance[] = [];
  isLoading: boolean = true;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getMySeances().subscribe((seances) => {
      this.seanceList = seances;
      this.isLoading = false;
    })
  }
}
