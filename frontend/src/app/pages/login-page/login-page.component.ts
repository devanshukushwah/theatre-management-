import { Component, OnInit } from '@angular/core';
import { CredentialsService } from 'src/app/services/credentials.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  email!: string;
  password!: string;

  constructor(private credentialsService: CredentialsService) {}

  ngOnInit(): void {}

  handleLogin() {
    const data = { email: this.email, password: this.password };
    this.credentialsService.generateToken(data).subscribe((res) => {
      console.log(res);
    });
  }
}
