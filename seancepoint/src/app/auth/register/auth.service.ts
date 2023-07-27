import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private api: HttpClient) {}

  register(
    username: string,
    email: string,
    tel: string,
    password: string,
    rePassword: string
  ) {
    return this.api.post(`http://localhost:3000/users/register`, {
      username,
      email,
      tel,
      password,
      rePassword,
    });
  }

  login(username: string, password: string) {
  }
}
