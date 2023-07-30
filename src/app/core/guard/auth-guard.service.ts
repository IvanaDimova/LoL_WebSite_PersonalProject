import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserAuthService } from '../service';

@Injectable({
    providedIn: "root"
})
export class AuthGuard implements CanActivate {

    constructor(private auth: UserAuthService, private router: Router) { }

    canActivate(): boolean {
        // If the user is not logged in we'll send them back to the home page

        if (!this.auth.isLoggedIn()) {
            //Redirect to login page
            this.router.navigate(['login']);
            return false;
        }
        return true;
    }

}