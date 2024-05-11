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
import { UnknownPageComponent } from './pages/unknown-page/unknown-page.component';
import { AddShowPageComponent } from './pages/add-show-page/add-show-page.component';
import { EditShowPageComponent } from './pages/edit-show-page/edit-show-page.component';
import { BookShowPageComponent } from './pages/book-show-page/book-show-page.component';

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
    component: EditShowPageComponent,
    path: 'show/edit/:id',
    canActivate: [AuthGuard],
  },
  {
    component: ShowPageComponent,
    path: 'show',
    canActivate: [AuthGuard],
  },
  {
    component: AddShowPageComponent,
    path: 'show/add',
    canActivate: [AuthGuard],
  },
  {
    component: BookShowPageComponent,
    path: 'book-show/:id',
    canActivate: [AuthGuard],
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '404',
  },
  {
    component: UnknownPageComponent,
    path: '404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
