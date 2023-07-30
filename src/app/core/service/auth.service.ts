import { Injectable } from "@angular/core";
import { CommonConstant } from "../constant/common.constant";

@Injectable({
    providedIn: 'root'
})
export class UserAuthService {

    constructor() {
    }

    saveToken(token: string) {
        window.localStorage.setItem(CommonConstant.token, token);
    }

    saveUser(user: any) {
        window.localStorage.setItem(CommonConstant.user, JSON.stringify(user));
    }

    getToken(): string | null {
        return window.localStorage.getItem(CommonConstant.token);
    }

    getUser(): any {
        let user = window.localStorage.getItem(CommonConstant.user);
        if (user) {
            return JSON.parse(user);
        }
        return null;
    }

    isLoggedIn(): boolean {
        return !!this.getToken()
    }

    loggedOut(): void {
        window.localStorage.clear();
    }

}