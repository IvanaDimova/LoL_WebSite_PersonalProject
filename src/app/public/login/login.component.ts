import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService, UserAuthService } from 'src/app/core';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ["./login.style.css"]
})

export class LoginComponent {

    frmLogin: FormGroup;
    error: string | null = "";

    constructor(private router: Router, private fb: FormBuilder, private loginService: LoginService,
        private userAuthService: UserAuthService) {
        this.createForm();
    }

    private createForm() {
        this.frmLogin = this.fb.group({
            username: ['kminchelle', [Validators.required]],
            password: ['0lelplR', [Validators.required]]
        });
    }

    login() {
        if (!this.frmLogin.valid) {
            return;
        }
        this.error = null;
        const params = {
            username: this.frmLogin.value.username,
            password: this.frmLogin.value.password,
        }
        this.loginService.login(params)
            .subscribe({
                next: (result: any) => {
                    this.userAuthService.saveUser(result);
                    this.userAuthService.saveToken(result.token);
                    setTimeout(() => {
                        this.router.navigate(['private']);
                    }, 0);
                },
                error: () => {
                    this.error = 'Invalid username and/or password';
                }
            })
    }

}
