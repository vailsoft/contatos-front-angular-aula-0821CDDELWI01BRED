import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nome = '';
  email = '';
  senha = '';
  conf = '';

  cadastrar(){
    console.log(this.nome, this.email, this.senha, this.conf);
  }


}
