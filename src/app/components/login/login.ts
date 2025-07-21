import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { UserService } from '../../services/user-service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    RouterLink,
    CommonModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    CardModule,
    DividerModule,
    ToastModule,
  ],
  providers: [MessageService],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  username = '';
  password = '';
  constructor(
    private userService: UserService,
    private messageService: MessageService,
    private router: Router
  ) {}

  login() {
    const user = {
      username: this.username,
      password: this.password,
    };
    this.userService.loginUser(user).subscribe({
      next: (response) => {
        console.log('Login successful', response);
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));
        this.router.navigate(['/dashboard']);
        this.messageService.add({
          severity: 'success',
          summary: 'Login Successful',
          detail: 'Welcome back!',
          life: 3000,
        });
      },
      error: (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Login Failed',
          detail: 'Invalid username or password.',
          life: 3000,
        });
      },
    });
  }
}
