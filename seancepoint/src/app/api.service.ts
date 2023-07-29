import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Seance, SeanceRaw } from './types/seance';
import { catchError } from 'rxjs';
import { Review, ReviewRaw } from './types/review';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  // create seance

  createSeance(
    title: string,
    type: string,
    price: number,
    duration: number,
    description: string
  ) {
    return this.http.post('/api/seances/create', {
      title,
      type,
      price,
      duration,
      description,
    });
  }
  // read seances

  getAll() {
    return this.http.get<Seance[]>('/api/seances');
  }

  // my seances

  // specific seance

  getOne(id: string) {
    return this.http.get<Seance>(`/api/seances/${id}`);
  }

  // edit seance

  editSeance(id: string, data: SeanceRaw) {
    return this.http.put(`/api/seances/${id}`, data);
  }

  // delete seance

  deleteSeance(id: string) {
    return this.http.delete(`/api/seances/${id}`);
  }

  // create appointment

  appoint(seanceId: string, date: Date) {
    return this.http.post(`/api/seances/${seanceId}/appointments`, { date });
  }

  // leave review

  leaveReview(seanceId: string, data: ReviewRaw) {
    return this.http.post(`/api/seances/${seanceId}/reviews`, data);
  }

  // get reviews
  getReviews(seanceId: string) {
    return this.http.get<Review[]>(`/api/seances/${seanceId}/reviews`);
  }

  // edit review

  // delete review
}
