import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, signOut } from '@angular/fire/auth';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(private auth: Auth, private router: Router) { }

  logout() {
    signOut(this.auth).then(() => {
      this.router.navigate(['/login']);
    }).catch(error => {
      console.error('Logout failed:', error);
    });
  }

}

