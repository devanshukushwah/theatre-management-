import { Component, OnInit } from '@angular/core';
import { CredentialsService } from 'src/app/services/credentials.service';
import { RouterService } from 'src/app/services/router.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private credService: CredentialsService,
    public routerService: RouterService
  ) {}

  ngOnInit(): void {}

  handleSignOff(): void {
    if (this.credService.logOff()) {
      this.routerService.navigateToLoginPage();
    }
  }
}
