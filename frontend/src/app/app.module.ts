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
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    HttpUrlsService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
