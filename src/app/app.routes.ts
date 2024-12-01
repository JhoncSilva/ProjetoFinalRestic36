import { Routes } from '@angular/router';
import { SplashComponent } from './pages/splash/splash.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { VideoComponent } from './pages/video/video.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { ErrorComponent } from './pages/error/error.component';

export const routes: Routes = [
  {path: '', component: SplashComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'video/:id', component: VideoComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: '**', component: ErrorComponent}
];
