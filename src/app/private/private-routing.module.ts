import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateComponent } from './private.component';
import { ChampComponent } from './champ/champ.component';
import { AuthGuard } from '../core';
import { EsportComponent } from './esport/esport.component';
import { GameComponent } from './game/game.component';
import { HomeComponent } from './home/home.component';

//routes
const routes: Routes = [
    {
        path: '',
        component: PrivateComponent,
        canActivate: [AuthGuard],
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'champ', component: ChampComponent },
            { path: 'esport', component: EsportComponent },
            { path: 'game', component: GameComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PrivateRoutingModule { }


export const PrivateComponents = [PrivateComponent, ChampComponent, EsportComponent, GameComponent, HomeComponent]; 