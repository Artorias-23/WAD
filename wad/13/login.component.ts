import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  email = '';
  password = '';
  message = '';
  loggedIn = false;

  constructor(private auth: AuthService) {}

  login() {
    if (this.auth.login(this.email, this.password)) {
      this.message = 'Login successful!';
      this.loggedIn = true;
    } else {
      this.message = 'Invalid credentials';
    }
  }
}
