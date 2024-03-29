import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetails } from 'src/app/common.interface/UserDetails';
import { CredentialsService } from 'src/app/services/credentials.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { RouterService } from 'src/app/services/router.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  email!: string;
  password!: string;
  isDisabled: boolean = false;

  constructor(
    private credentialsService: CredentialsService,
    private localStorageService: LocalStorageService,
    private routerService: RouterService
  ) {}

  ngOnInit(): void {
    if (this.credentialsService.userIsValid()) {
      this.routerService.navigateToHome();
    }
  }

  handleLogin() {
    this.isDisabled = true;
    const data = { email: this.email, password: this.password };
    this.credentialsService.generateToken(data).subscribe(
      (res) => {
        this.localStorageService.setItem('userDetails', {
          token: res,
          emailAddress: this.email,
        });
        this.isDisabled = false;
        this.routerService.navigateToHome();
      },
      (err) => {
        console.log(err);
        this.isDisabled = false;
      }
    );
  }
}
