import { NgModule } from '@angular/core';
import { PublicHeaderBarComponent } from './public-header-bar/public-header-bar.component';
import { AppHeaderBarComponent } from './app-header-bar/app-header-bar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule
  ],
  declarations: [
    PublicHeaderBarComponent,
    AppHeaderBarComponent,
  ],
  exports: [
    PublicHeaderBarComponent,
    AppHeaderBarComponent,
  ]
})
export class LayoutModule { }
