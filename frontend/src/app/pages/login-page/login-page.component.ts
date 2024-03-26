import { Component, OnInit } from '@angular/core';
import { CredentialsService } from 'src/app/services/credentials.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

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
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {}

  handleLogin() {
    this.isDisabled = true;
    const data = { email: this.email, password: this.password };
    this.credentialsService.generateToken(data).subscribe(
      (res) => {
        this.localStorageService.setItem('userDetails', { token: res });
        this.isDisabled = false;
      },
      (err) => {
        console.log(err);
        this.isDisabled = false;
      }
    );
  }
}
