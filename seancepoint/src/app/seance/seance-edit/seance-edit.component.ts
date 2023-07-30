import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { ErrorService } from 'src/app/core/error/error.service';
import { emptySeance } from 'src/app/shared/utils/empty-types';
import { Seance } from 'src/app/types/seance';

@Component({
  selector: 'app-seance-edit',
  templateUrl: './seance-edit.component.html',
  styleUrls: ['./seance-edit.component.css'],
})
export class SeanceEditComponent implements OnInit {
  typeRegex: RegExp = /^[A-Za-z\s]+$/;
  seanceId: string = '';
  currentSeance: Seance = emptySeance;

  constructor(
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    private errSvc: ErrorService
  ) {}

  ngOnInit(): void {
    this.seanceId = this.route.snapshot.params['id'];
    this.api.getOne(this.seanceId).subscribe((seance) => {
      this.currentSeance = seance;
    });
  }
  submitForm(form: NgForm) {
    const { title, type, price, duration, description } = form.value;

    this.api
      .editSeance(this.seanceId, {
        title,
        type,
        price,
        duration,
        description,
      })
      .subscribe({
        next: (s) => {
          this.router.navigate([`/seances/${this.seanceId}`]);
        },
        error: (err) => {
          this.errSvc.setError(err);
        },
      });
  }
}
