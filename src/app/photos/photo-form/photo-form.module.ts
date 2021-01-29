import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { VMessageComponent } from 'src/app/shared/directives/vmessage/vmessage.component';
import { PhotoFormComponent } from './photo-form.component';

@NgModule({
    declarations: [
        PhotoFormComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        VMessageComponent
    ]   
    
})
export class PhotoFormModule {
    
}