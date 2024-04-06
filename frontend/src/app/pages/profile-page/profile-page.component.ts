import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ResponseModel } from 'src/app/common/interface/ResponseModel';
import { UserDetails } from 'src/app/common/interface/UserDetails';
import { UserProfile } from 'src/app/common/interface/UserProfile';
import { CredentialsService } from 'src/app/services/credentials.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],
})
export class ProfilePageComponent implements OnInit {
  isEdit: boolean = false;
  isUpdateButtonLoader: boolean = false;
  userProfile!: UserProfile;
  constructor(
    private profileService: ProfileService,
    private credService: CredentialsService
  ) {}

  ngOnInit(): void {
    const userDetails: UserDetails = this.credService.getUserDetails();

    this.profileService
      .getProfileByEmailAddress(userDetails.emailAddress)
      .subscribe((res) => {
        this.userProfile = res?.data;
      });
  }

  handleUpdateProfile(): void {
    this.isUpdateButtonLoader = true;
    this.profileService.updateProfile(this.userProfile).subscribe(
      (res: ResponseModel) => {
        if (res && !res.data) {
          this.userProfile = res.data;
        }
        this.isUpdateButtonLoader = false;
      },
      (err) => {
        this.isUpdateButtonLoader = false;
      }
    );
  }

  toggleEdit() {
    this.isEdit = !this.isEdit;
  }
}
