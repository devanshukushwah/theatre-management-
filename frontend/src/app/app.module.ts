import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { FormsModule } from '@angular/forms';
import { HttpUrlsService } from './core/http-urls.service';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { ProfileFieldComponent } from './components/profile-field/profile-field.component';
import { ButtonLoaderComponent } from './components/button-loader/button-loader.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { AddMoviePageComponent } from './pages/add-movie-page/add-movie-page.component';
import { MoviePageComponent } from './pages/movie-page/movie-page.component';
import { MovieComponent } from './components/forms/movie/movie.component';
import { ShowPageComponent } from './pages/show-page/show-page.component';
import { EditMoviePageComponent } from './pages/edit-movie-page/edit-movie-page.component';
import { EditShowPageComponent } from './pages/edit-show-page/edit-show-page.component';
import { UnknownPageComponent } from './pages/unknown-page/unknown-page.component';
import { AddShowPageComponent } from './pages/add-show-page/add-show-page.component';
import { ShowComponent } from './components/forms/show/show.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    HeaderComponent,
    HomePageComponent,
    ProfilePageComponent,
    ProfileFieldComponent,
    ButtonLoaderComponent,
    AddMoviePageComponent,
    MoviePageComponent,
    MovieComponent,
    ShowPageComponent,
    EditMoviePageComponent,
    EditShowPageComponent,
    UnknownPageComponent,
    AddShowPageComponent,
    ShowComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    HttpUrlsService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    DatePipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
