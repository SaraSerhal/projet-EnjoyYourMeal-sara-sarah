import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  public registrationForm: FormGroup;
  public errorMessage: string = '';

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  public onSubmit() {
    if (this.registrationForm.valid) {
      const user = this.registrationForm.value;
      const success = this.userService.register(user);
      if (success) {
        alert("Inscription réussie ! Connectez-vous.");
        this.router.navigate(['/login']);
      } else {
        this.errorMessage = "Un compte avec cet email existe déjà.";
      }
    }
  }
}
