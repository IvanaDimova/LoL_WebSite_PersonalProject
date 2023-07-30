import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PublicComponent } from './public.component';
import { FeaturesComponent } from './features/homeComponent';

//routes
const routes: Routes = [
    {
        path: '',
        component: PublicComponent,
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'login', component: LoginComponent },
            { path: 'features', component: FeaturesComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PublicRoutingModule { }


export const PublicComponents = [PublicComponent, LoginComponent,FeaturesComponent]; 