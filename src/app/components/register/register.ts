import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
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
  selector: 'app-register',
  imports: [
    FormsModule,
    CommonModule,
    RouterLink,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    CardModule,
    DividerModule,
    ToastModule,
  ],
  providers: [MessageService],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  username = '';
  email = '';
  password = '';

  constructor(
    private userService: UserService,
    private messageService: MessageService
  ) {}

  register() {
    const user = {
      username: this.username,
      email: this.email,
      password: this.password,
    };
    this.userService.newUser(user).subscribe({
      next: (response) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Registration Successful',
          detail: 'Your account has been created!',
          life: 3000,
        });
      },
      error: (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Registration Failed',
          detail: 'Please try again later.',
          life: 3000,
        });
      },
    });
  }
}
