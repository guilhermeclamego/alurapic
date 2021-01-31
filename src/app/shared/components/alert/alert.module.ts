import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Alert } from './alert';
import { AlertComponent } from './alert.component';

@NgModule({
    declarations: [ AlertComponent ],
    exports: [ AlertComponent ],
    imports: [ CommonModule ]
})
export class AlertModule{

}