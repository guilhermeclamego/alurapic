import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Photo } from "./photo";

const API = 'http://localhost:3000'

@Injectable({providedIn: 'root'}) //escopo raiz, qualquer component da aplicação que precisar, terá disponivel
export class PhotoService {
    
    constructor(private http: HttpClient){} 
//private e o this, para ser possível ouvir o http dentro da função, sem isso, o http só seria ouvido direto da classe
    listFromUser(userName: string){
        return this.http.get<Photo[]>(`${API}/${userName}/photos`);
    }
}