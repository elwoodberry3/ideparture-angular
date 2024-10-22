import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone: true,
  imports: [ReactiveFormsModule],
})
export class LoginComponent {

  idepartureLogo: string = "assets/imgs/svgs/icon_ideparture.svg";
  fb = inject(FormBuilder);
  http = inject(HttpClient);
  authService = inject(AuthService)
  router = inject(Router);

  form = this.fb.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  // ERROR MESSAGE
  errorMessage: string | null = null;

  // LOGIN : ON SUBMIT
  onSubmit(): void {
    const rawForm = this.form.getRawValue()
    this.authService
      .login(rawForm.email, rawForm.password)
      .subscribe({
        next:() => {
          this.router.navigateByUrl('/dashboard')
        },
        error: (err) =>{
          this.errorMessage = err.code
        }
      })
  }

  loginWithGoogle() {
    // Add the logic for Google login
  }
}
