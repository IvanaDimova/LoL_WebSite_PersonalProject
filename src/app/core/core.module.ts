

import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BaseService, LoginService, UserAuthService } from './service';
import { AuthGuard } from './guard';

@NgModule({
    imports: [
        HttpClientModule
    ],
    providers: [
        LoginService,
        UserAuthService,
        BaseService,
        AuthGuard,
    ]
})
export class CoreModule { }
