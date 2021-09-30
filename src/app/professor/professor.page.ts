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
  alunoNome: any;
  status: string;
  mensagem: string;
  verLista: boolean = false;
  reset: boolean = true;
  listaDeHrs: any[];
  novaLista: any[];
  perfil: any;
  
  usuarios: any[];
  
  alunos: string[];

  deuErro: any;

  constructor(private router: Router, public global: GlobalVarsService) { 
    this.mensagem = 'Para Habilitar o botão preencha todos os campos menos aluno';
    this.listaDeHrs = global.listaDeHorarios;
    this.perfil = this.global.logado.perfil;
    this.usuarios = global.usuarios;
    this.alunos = [];
  }
  
  ngOnInit() {
    for (let index = 0; index < this.usuarios.length; index++) {
      const alunoz = this.usuarios[index];
      if(alunoz.perfil === 2){
        this.alunos.push(alunoz.nome);
      }
    }
  }
  
  logout(){
    this.router.navigate(['/home']);
  }


  cadastroHorario(){
    try {
      this.global.cadastro(this.data,this.hora,this.texto,this.status, this.alunoNome);
      this.reset = false;
    } catch (error) {
      this.mensagem = error;
    }
  }

  apareceLista(){
    this.verLista = true;
  }

  verlista(){
    this.router.navigate(['/lista']);
  }


}
