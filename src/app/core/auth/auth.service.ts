import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_URL = 'http://localhost:3000'
@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) {}

  authenticate(userName: string, password: string){
    //Como o nome da propriedade é o mesmo do parâmetro, em js, pode ser passar apenas o nome da propriedade
    // { userName, password } = { userName: userName, password: password}
    return this.http.post(API_URL + '/user/login', { userName, password })

  }
}
