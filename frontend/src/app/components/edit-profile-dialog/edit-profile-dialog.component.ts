import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ResponseModel } from 'src/app/common/interface/ResponseModel';
import { UserProfile } from 'src/app/common/interface/UserProfile';
import { ProfilePageComponent } from 'src/app/pages/profile-page/profile-page.component';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-edit-profile-dialog',
  templateUrl: './edit-profile-dialog.component.html',
  styleUrls: ['./edit-profile-dialog.component.css'],
})
export class EditProfileDialogComponent implements OnInit {
  genderOptions: string[] = ['MALE', 'FEMALE', 'OTHER'];

  constructor(
    private profileService: ProfileService,
    public dialogRef: MatDialogRef<ProfilePageComponent>,
    @Inject(MAT_DIALOG_DATA) public userProfile: UserProfile
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close(this.userProfile);
  }

  handleUpdateProfile(): void {
    console.log('click edi pro upd');

    // this.isUpdateButtonLoader = true;
    this.profileService.updateProfile(this.userProfile).subscribe(
      (res: ResponseModel) => {
        if (res.success) {
          this.dialogRef.close(res.data);
        }
      },
      (err) => {
        // this.isUpdateButtonLoader = false;
        console.log(err);
      }
    );
  }
}
