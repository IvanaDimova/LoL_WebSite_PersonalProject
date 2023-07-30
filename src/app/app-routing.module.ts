import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//routes
const routes: Routes = [
  { path: '', redirectTo: 'private', pathMatch: 'full' },
  { path: 'private', loadChildren: () => import('./private/private.module').then(m => m.PrivateModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


export const AppComponents = []; 