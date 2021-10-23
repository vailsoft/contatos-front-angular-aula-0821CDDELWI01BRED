import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  private readonly url = "http://contatos-nodb.herokuapp.com";
  cadastrar(nome:string, email:string, senha:string){
    console.log(nome, email, senha);
    let u = {nome, email, senha}
    return this.http.post(this.url+"/registrar",u);
  }
}
