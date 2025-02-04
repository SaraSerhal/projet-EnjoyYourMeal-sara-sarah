import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import {FormsModule} from "@angular/forms";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [
    FormsModule, RouterModule
  ],
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public email: string = '';
  public password: string = '';
  public errorMessage: string = '';

  constructor(private userService: UserService, private router: Router) {}

  public login() {
    if (this.userService.login(this.email, this.password)) {
      this.router.navigate(['/home']);
    } else {
      this.errorMessage = "Identifiants incorrects.";
    }
  }
}
