import { GlobalVarsService, ALUNO } from './../global-vars.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.page.html',
  styleUrls: ['./professor.page.scss'],
})
export class ProfessorPage implements OnInit {
  data: Date;
  hora: string;
  texto: string;
  aluno: any;
  status: string;
  mensagem: string;
  verLista: boolean = false;
  reset: boolean = true;
  listaDeHrs: any[];
  novaLista: any[];
  perfil: any;
  alunoReservas: number = 1;

  deuErro: any;

  constructor(private router: Router, public global: GlobalVarsService) { 
    this.mensagem = 'Para Habilitar o botão preencha todos os campos menos aluno';
    this.listaDeHrs = this.global.listaDeHorarios;
    this.perfil = this.global.logado.perfil;
  }
  
  ngOnInit() {
    this.novaLista = [
      {
        data : this.data,
        hora: this.hora,
        texto: 'texto',
        aluno: null,
        status: 'ativa'
      }
    ];
  }
  
  logout(){
    this.router.navigate(['/home']);
  }


  cadastroHorario(){
    try {
      this.global.cadastro(this.data,this.hora,this.texto,this.status);
      
      this.reset = false;
      this.apareceLista();
    } catch (error) {
      this.mensagem = error;
    }
  }

  reservar(hora: string){
    if(this.alunoReservas == 1){
      this.global.add(hora, this.global.logado.nome);
    }else{
     this.deuErro="usuario Ja possui uma reserva";
    }
    this.alunoReservas --;
  }

  desReservar(hora: string){
    if(this.alunoReservas == 0){
      this.global.tira(hora, this.global.logado.nome);
    }else{
     this.deuErro="Usuario ja possui uma reserva";
    }
    this.alunoReservas ++;
  }

  

  apareceLista(){
    this.verLista = true;
  }

  verlista(){
    this.router.navigate(['/lista']);
  }

}
