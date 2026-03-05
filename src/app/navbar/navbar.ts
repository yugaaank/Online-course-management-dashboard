import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatToolbarModule, MatButtonModule],
  template: `
    <mat-toolbar color="primary">
      <span>Student Management System</span>
      <span class="spacer"></span>
      <button mat-button routerLink="/" routerLinkActive="active-link" [routerLinkActiveOptions]="{exact: true}">Courses</button>
      <button mat-button routerLink="/students" routerLinkActive="active-link">Students</button>
      <button mat-button routerLink="/enroll" routerLinkActive="active-link">Enroll Student</button>
    </mat-toolbar>
  `,
  styles: [`
    .spacer {
      flex: 1 1 auto;
    }
    .active-link {
      background: rgba(255, 255, 255, 0.2);
    }
  `]
})
export class NavbarComponent {}
