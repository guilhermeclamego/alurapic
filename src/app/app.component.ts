import { Component } from '@angular/core';
import { PhotoService } from './photos/photo/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  photos: Object[] = [];

  //Injeção de dependência http, carregado o modulo no app.module
  constructor(photoService: PhotoService){
      photoService.listFromUser('flavio')
                  .subscribe( photos => {
                    this.photos = photos                    
                  });
  }
  
}
