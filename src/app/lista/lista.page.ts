import { Component, OnInit } from '@angular/core';

import { GlobalVarsService } from '../global-vars.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {
  lista: any[];
  variavelBosta: any;
  perfil: any;
  alunoReservas: number;
  msgErro: any;
  alunoLogado: any;
  id: any;
  texto: string;
  textoPadrao = 'Conteudo abordado pelo aluno: ';

  constructor(private varz: GlobalVarsService,private router: Router) {
    this.lista = varz.listaDeHorarios;
    this.variavelBosta = varz.varBosta;
    this.perfil = this.varz.logado.perfil;
    this.id = this.varz.logado.id;
    this.alunoReservas = this.varz.logado.reservas;
    
   }

  ngOnInit() {
    
  }

  reservar(hora: string, texto: string){
    if(this.alunoReservas == 1){
      this.varz.add(hora, this.varz.logado.nome,texto);
    }else{
     this.msgErro="usuario Ja possui uma reserva";
    }
    this.alunoReservas --;
  }

  desReservar(hora: string){
    if(this.alunoReservas == 0){
      this.varz.tira(hora);
    }else{
     this.msgErro="Usuario ja possui uma reserva";
    }
    
    this.alunoReservas ++;
    
  }

  logout(){
    this.router.navigate(['/home']);
  }

}
