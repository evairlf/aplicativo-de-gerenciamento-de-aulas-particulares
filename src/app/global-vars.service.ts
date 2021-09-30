import { Injectable, OnInit } from '@angular/core';

export const PROFESSOR = 1;
export const ALUNO = 2;

@Injectable({
  providedIn: 'root'
})
export class GlobalVarsService {

  logado: any;
  usuarios: any[];
  public listaDeHorarios: any[];
  varBosta: any;

  constructor() {
    
    this.listaDeHorarios = [];

    this.usuarios = [
      {
        id: 1,
        reservas:0,
        nome: 'Rodolfo Antonio',
        email: 'aluno@email.com',
        senha: '1234',
        perfil: ALUNO
      },
      {
        id: 2,
        nome: 'Professor',
        email: 'professor@email.com',
        senha: '1234',
        perfil: PROFESSOR
      }
    ];


    console.log('chamado');
    this.logado = null;

   
  
  }


  login(email: string, senha: string) {

    if((email != null)|| (senha != null)){
    for (let i = 0; i < this.usuarios.length; i++) {
      const usr = this.usuarios[i];
      if ((usr.email === email) && (usr.senha === senha)) {
        this.logado = usr;
        return;
      }
    }
    throw new Error("E-mail ou senha inválida");
  }
  throw new Error("Email ou senha em branco");
  }

  cadastro(data: Date,hora: string,texto: string,status: string, aluno: any) {
    var horario = {
      data: data,
      hora: hora,
      texto: texto,
      aluno: aluno,
      status: status
     };
    this.varBosta = texto;
    this.listaDeHorarios.push(horario);
      for (let i = 0; i < this.listaDeHorarios.length; i++) {
        const element = this.listaDeHorarios[i];

        console.log(element.aluno);
        
      }
  }

  add(hora: string,nome,texto){
    try {
      for (let i = 0; i < this.listaDeHorarios.length; i++) {
        const hr = this.listaDeHorarios[i];
        if(hr.hora === hora){
        hr.aluno = nome;
        hr.texto += texto;
      }
    }
    } catch (error) {
      throw new Error("Usuario ja possui reserva");
    }
  }

    tira(hora: string){
      try {
        for (let i = 0; i < this.listaDeHorarios.length; i++) {
          const hr = this.listaDeHorarios[i];
          
            if(hr.hora === hora){
              hr.aluno = null;
            
          }
          
      }
      } catch (error) {
        throw new Error("imposivel desreservar");
      }
    }

}

