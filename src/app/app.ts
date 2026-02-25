import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component/navbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component/sidebar.component";


@Component({
  selector: 'app-root',
  imports: [NavbarComponent, SidebarComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('theme-customization');
}
