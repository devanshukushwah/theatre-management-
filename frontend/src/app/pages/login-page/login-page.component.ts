import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetails } from 'src/app/common.interface/UserDetails';
import { UserProfile } from 'src/app/common.interface/UserProfile';
import { CredentialsService } from 'src/app/services/credentials.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ProfileService } from 'src/app/services/profile.service';
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
    private routerService: RouterService,
    private profileService: ProfileService
  ) {}

  ngOnInit(): void {
    if (this.credentialsService.userIsValid()) {
      this.routerService.navigateToHome();
    }
  }

  handleLogin() {
    this.isDisabled = true;
    const data = { email: this.email, password: this.password };

    // first fetch token
    this.credentialsService.generateToken(data).subscribe(
      (res) => {
        let userDetails: UserDetails = {
          token: res,
          emailAddress: this.email,
          userProfile: null,
        };
        this.localStorageService.setItem('userDetails', userDetails);

        if (res) {
          // second get userProfile
          this.profileService
            .getProfileByEmailAddress(this.email)
            .subscribe((res) => {
              const userProfile: UserProfile = res?.data;
              userDetails = { ...userDetails, userProfile };
              this.localStorageService.setItem('userDetails', userDetails);
            });

          this.routerService.navigateToHome();
        }

        this.isDisabled = false;
      },
      (err) => {
        console.log(err);
        this.isDisabled = false;
      }
    );
  }
}
