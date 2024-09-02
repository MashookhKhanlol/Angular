import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavbar } from './navbar/navbar.component';
import { AppHeader } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppNavbar, AppHeader],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hotelinventoryapp';
  isActive : boolean = true
}
