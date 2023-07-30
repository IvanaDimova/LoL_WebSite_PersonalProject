import { NgModule } from '@angular/core';
import { PrivateComponents, PrivateRoutingModule } from './private-routing.module';
import { LayoutModule } from 'src/layout/layout.module';

@NgModule({
    declarations: [
        [...PrivateComponents]
    ],
    imports: [
        LayoutModule,
        PrivateRoutingModule,
    ],
    providers: []
})
export class PrivateModule { }
