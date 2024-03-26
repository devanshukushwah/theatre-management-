import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { HttpUrlsService } from 'src/app/core/http-urls.service';
import { CredentialsService } from 'src/app/services/credentials.service';

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

  constructor(private credentialsService: CredentialsService) {}

  ngOnInit(): void {}

  handleCreateUser() {
    this.isDisabled = true;
    if (this.password !== this.confirmPassword) {
      alert('password not matching');
      return;
    }
    const data = { email: this.email, password: this.password };
    this.credentialsService.createUser(data).subscribe(
      (res) => {
        console.log(res);
        this.isDisabled = false;
      },
      (err) => {
        console.log(err);
        this.isDisabled = false;
      }
    );
  }
}
