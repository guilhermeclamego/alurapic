import { Component, Input } from '@angular/core';

const CLOUD = 'http://localhost:3000/img/'
@Component({
    selector: 'ap-photo',
    templateUrl: 'photo.component.html'
})
export class PhotoComponent {
    
    private _url = '';

    //Input, para o app.component.html, ficar dinamico, conforme imsg e url passados lá
    @Input() description = '';
    @Input() set url(url: string){
        if(!url.startsWith('data')){
            this._url = CLOUD + url;
        } else {
            this._url = url;
        }        
    }

    get url(){
        return this._url;
    }
}