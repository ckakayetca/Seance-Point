import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { ErrorService } from 'src/app/core/error/error.service';
import { Appointment } from 'src/app/types/appointment';

@Component({
  selector: 'app-my-appointments',
  templateUrl: './my-appointments.component.html',
  styleUrls: ['./my-appointments.component.css'],
})
export class MyAppointmentsComponent {
  appointmentsList: Appointment[] = [];
  hasAppointments: boolean = false;
  isLoading: boolean = true;

  constructor(private api: ApiService, private errSvc: ErrorService) {}

  ngOnInit(): void {

    this.api.getMyApps().subscribe({
      next: (appsList) => {
        this.appointmentsList = appsList;

        if(appsList.length > 0) {
          this.hasAppointments = true;
        }

        this.isLoading = false;
      },
      error: (e) => this.errSvc.setError(e)
    })
  }

  cancelApp(id: string) {

    this.api.cancelApp(id).subscribe({
      next: () => location.reload(),
      error: (e) => this.errSvc.setError(e)
    })
  }
}
