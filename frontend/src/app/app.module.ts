import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { FormsModule } from '@angular/forms';
import { HttpUrlsService } from './core/http-urls.service';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

@NgModule({
  declarations: [AppComponent, LoginPageComponent, RegisterPageComponent, HeaderComponent, HomePageComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [HttpUrlsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
