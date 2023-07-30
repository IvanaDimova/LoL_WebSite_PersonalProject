import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";
import { Observable } from "rxjs";
import { APIConstant } from "../constant";

@Injectable({
    providedIn: 'root',
})
export class LoginService {

    constructor(private baseService: BaseService) {
    }

    login(user: any): Observable<any> {
        return this.baseService.post(`${APIConstant.login}`, user);
    }

}