import { ALUNO, GlobalVarsService, PROFESSOR } from './../global-vars.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 email: string;
 senha: string;
 mensagem: string;

  constructor(private global: GlobalVarsService, private router: Router) {}

  login(){
    this.mensagem = '';
    try {
      this.global.login(this.email, this.senha);
      if(this.global.logado.perfil === PROFESSOR){
        this.router.navigate(['/professor']);
      }else if(this.global.logado.perfil === ALUNO){
        this.router.navigate(['/lista']);
      }
    } catch (error) {
      this.mensagem = error;
    }
  }


}
