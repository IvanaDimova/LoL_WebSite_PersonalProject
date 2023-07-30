import { NgModule } from '@angular/core';
import { LayoutModule } from 'src/layout/layout.module';
import { PublicComponents, PublicRoutingModule } from './public-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        [...PublicComponents]
    ],
    imports: [
        LayoutModule,
        CommonModule,
        PublicRoutingModule,
        ReactiveFormsModule,
    ],
    providers: []
})
export class PublicModule { }
