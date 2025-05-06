import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  name = '';
  email = '';
  password = '';
  registered = false;

  constructor(private auth: AuthService) {}

  register() {
    this.auth.register({ name: this.name, email: this.email, password: this.password });
    this.registered = true;
  }
}
