import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Navbar } from '../navbar/navbar';
@Component({
  selector: 'app-dash-board',
  imports: [CommonModule, CardModule, ButtonModule, Navbar],
  templateUrl: './dash-board.html',
  styleUrl: './dash-board.css',
})
export class DashBoard {}
