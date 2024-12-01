import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SplashComponent } from "./pages/splash/splash.component";
import { CommonModule } from '@angular/common';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SplashComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}

  showSplash = true;

  ngOnInit(): void {
      setTimeout(()=> {
        this.showSplash = false;
        this.checkLogin();
      }, 3000);
  }

  checkLogin() {
    this.auth.isAuthenticated$.subscribe((loggedIn) => {
      if (loggedIn) {
        this.router.navigate(['/home']); // Usuário logado
      } else {
        this.router.navigate(['/login']); // Usuário não logado
      }
    });
  }

  title = 'watchstream';
}
