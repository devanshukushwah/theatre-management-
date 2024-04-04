import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AppComponent } from './app.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { AuthGuard } from './guards/auth.guard';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { AddMoviePageComponent } from './pages/add-movie-page/add-movie-page.component';
import { MoviePageComponent } from './pages/movie-page/movie-page.component';
import { ShowPageComponent } from './pages/show-page/show-page.component';
import { EditMoviePageComponent } from './pages/edit-movie-page/edit-movie-page.component';

const routes: Routes = [
  {
    component: LoginPageComponent,
    path: 'login',
  },
  {
    component: RegisterPageComponent,
    path: 'signup',
  },
  {
    component: HomePageComponent,
    path: 'home',
    canActivate: [AuthGuard],
  },
  {
    component: ProfilePageComponent,
    path: 'profile',
    canActivate: [AuthGuard],
  },
  {
    component: MoviePageComponent,
    path: 'movie',
    canActivate: [AuthGuard],
  },
  {
    component: AddMoviePageComponent,
    path: 'movie/add',
    canActivate: [AuthGuard],
  },
  {
    component: EditMoviePageComponent,
    path: 'movie/edit/:id',
    canActivate: [AuthGuard],
  },
  {
    component: ShowPageComponent,
    path: 'show',
    canActivate: [AuthGuard],
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
