import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor() { }

  nome:String;
  email:String;
  senha:String;

  ngOnInit() {
  }

  salvar(){
    alert("Nome"+this.nome);
  }
}
