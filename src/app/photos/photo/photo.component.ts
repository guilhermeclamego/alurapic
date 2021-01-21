import { Component, Input } from '@angular/core';

@Component({
    selector: 'ap-photo',
    templateUrl: 'photo.component.html'
})
export class PhotoComponent {
    //Input, para o app.component.html, ficar dinamico, conforme imsg e url passados lá
    @Input() description = '';
    @Input() url = '';
}