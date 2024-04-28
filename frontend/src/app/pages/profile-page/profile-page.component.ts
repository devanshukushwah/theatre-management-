import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ResponseModel } from 'src/app/common/interface/ResponseModel';
import { UserDetails } from 'src/app/common/interface/UserDetails';
import { UserProfile } from 'src/app/common/interface/UserProfile';
import { EditProfileDialogComponent } from 'src/app/components/edit-profile-dialog/edit-profile-dialog.component';
import { CredentialsService } from 'src/app/services/credentials.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],
})
export class ProfilePageComponent implements OnInit {
  userProfile!: UserProfile;
  constructor(
    private profileService: ProfileService,
    private credService: CredentialsService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    const userDetails: UserDetails = this.credService.getUserDetails();

    this.profileService
      .getProfileByEmailAddress(userDetails.emailAddress)
      .subscribe((res) => {
        this.userProfile = res?.data;
      });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EditProfileDialogComponent, {
      width: '400px',
      data: { ...this.userProfile },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) this.userProfile = result;
    });
  }
}
