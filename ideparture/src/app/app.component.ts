import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';
import { AuthService } from './services/auth/auth.service';
import { UserInterface } from './assets/interfaces/user-interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet, 
    RouterLink,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  authService = inject(AuthService)

  ngOnInit(): void {
    this.authService.user$.subscribe((user: UserInterface | null) => {
      if(user){
        this.authService.currentUserSignal.set({
          email: user.email!,
          username: user.username!
        })
      }else{
        this.authService.currentUserSignal.set(null)
      }
      console.log("AUTH SERVICE", this.authService.currentUserSignal())
    })
  }

  logout(): void {
    console.log('logout');
  }
  
}
