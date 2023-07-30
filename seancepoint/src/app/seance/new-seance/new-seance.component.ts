import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { ErrorService } from 'src/app/core/error/error.service';

@Component({
  selector: 'app-new-seance',
  templateUrl: './new-seance.component.html',
  styleUrls: ['./new-seance.component.css'],
})
export class NewSeanceComponent {
  typeRegex: RegExp = /[A-Za-z\s]+/;

  constructor(private api: ApiService, private router: Router, private errSvc: ErrorService) {}

  postSeance(form: NgForm) {
    const {
      title,
      type,
      price,
      duration,
      description
    } = form.value;

    this.api.createSeance(title, type, price, duration, description).subscribe({
      next: (res) => console.log(res),
      error: (err) => this.errSvc.setError(err),
      complete: () => {
        this.router.navigate(['/seances'])
      }
    })
  }
}
