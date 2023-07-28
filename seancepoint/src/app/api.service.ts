import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Seance } from './types/seance';

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
      description
    });
  }
  // read seances

  getAll() {
    return this.http.get<Seance[]>('/api/seances');
  }

  // my seances

  // specific seance

  getOne(id: string) {
    return this.http.get<Seance>(`/api/seances/${id}`)
  }

  // edit seance

  // update seance

  // delete seance

  // create appointment

  // leave review

  // edit review

  // delete review
}
