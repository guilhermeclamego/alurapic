import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  photos = [];

  //Injeção de dependência http, carregado o modulo no app.module
  constructor(http: HttpClient){
    console.log(http);
  }
  
}
