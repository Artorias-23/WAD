import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any = null;

  register(data: any) {
    localStorage.setItem('user', JSON.stringify(data));
  }

  login(email: string, password: string): boolean {
    const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
    if (storedUser.email === email && storedUser.password === password) {
      this.user = storedUser;
      return true;
    }
    return false;
  }

  getUser() {
    return this.user;
  }
}
