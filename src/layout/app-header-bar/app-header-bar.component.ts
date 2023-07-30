import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/core';

@Component({
  selector: 'app-header-bar',
  templateUrl: './app-header-bar.component.html'
})
export class AppHeaderBarComponent {

  constructor(private router: Router,
    private userAuthService: UserAuthService) {
  }


  logout() {
    this.userAuthService.loggedOut();
    this.router.navigateByUrl("/login")
  }
}
