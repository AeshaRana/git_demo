import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-navbar',
  imports: [MenubarModule,ButtonModule,AvatarModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
 items = [
    { label: 'Dashboard', icon: 'pi pi-home', routerLink: '/' },
    { label: 'Tasks', icon: 'pi pi-list', routerLink: '/tasks' },
    { label: 'Projects', icon: 'pi pi-briefcase', routerLink: '/projects' },
    { label: 'Calendar', icon: 'pi pi-calendar', routerLink: '/calendar' }
  ];

  notifications = 3;
}
