import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetails } from 'src/app/common.interface/UserDetails';
import { HttpUrlsService } from 'src/app/core/http-urls.service';
import { CredentialsService } from 'src/app/services/credentials.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { RouterService } from 'src/app/services/router.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent implements OnInit {
  email!: string;
  password!: string;
  confirmPassword!: string;
  isDisabled: boolean = false;

  constructor(
    private credentialsService: CredentialsService,
    private routerService: RouterService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    if (this.credentialsService.userIsValid()) {
      this.routerService.navigateToHome();
    }
  }

  handleCreateUser() {
    this.isDisabled = true;
    if (this.password !== this.confirmPassword) {
      alert('password not matching');
      return;
    }
    const data = { email: this.email, password: this.password };
    this.credentialsService.createUser(data).subscribe(
      (res) => {
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
