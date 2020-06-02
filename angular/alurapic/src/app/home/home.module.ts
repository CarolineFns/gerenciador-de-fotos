import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SignInComponent } from './signin/signin.component';

@NgModule({
    declarations: [SignInComponent],
    imports: [
        ReactiveFormsModule,
        CommonModule
    ]
})
export class HomeModule {}