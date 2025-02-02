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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { EditProfileDialogComponent } from './components/edit-profile-dialog/edit-profile-dialog.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatTableModule } from '@angular/material/table';
import { SearchMovieDialogComponent } from './components/search-movie-dialog/search-movie-dialog.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { GenericTableComponent } from './components/generic-table/generic-table.component';
import { BookShowPageComponent } from './pages/book-show-page/book-show-page.component';
import { GeneralFieldsComponent } from './components/general-fields/general-fields.component';
import { BookDetailPageComponent } from './pages/book-detail-page/book-detail-page.component';

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
    EditProfileDialogComponent,
    SearchMovieDialogComponent,
    GenericTableComponent,
    BookShowPageComponent,
    GeneralFieldsComponent,
    BookDetailPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatMenuModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatIconModule,
    MatChipsModule,
    MatTableModule,
    MatListModule,
    MatDividerModule,
  ],
  providers: [
    HttpUrlsService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    DatePipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
