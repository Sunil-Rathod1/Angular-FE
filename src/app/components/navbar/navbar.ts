import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
@Component({
  selector: 'app-navbar',
  imports: [CommonModule, MenubarModule, CardModule, ButtonModule, MenuModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  items: any;
  userMenuItems: any[] = [];
  user: any;
  constructor(private router: Router) {}
  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
    this.items = [
      { label: 'Dashboard', icon: 'pi pi-home', routerLink: '/dashboard' },
      { label: 'Posts', icon: 'pi pi-pencil', routerLink: '/posts' },
      // { label: 'Profile', icon: 'pi pi-user', routerLink: '/profile' },
    ];

    this.userMenuItems = [
      {
        label: 'Logout',
        icon: 'pi pi-sign-out',
        command: () => this.logout(),
      },
    ];
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
