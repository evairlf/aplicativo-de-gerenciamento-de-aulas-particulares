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

  constructor() {
    this.listaDeHorarios = [
      {
        data: new Date,
        hora: '17:00',
        texto: 'texto',
        aluno: null,
        status: 'ativo'
      },{
        data: new Date,
        hora: '13:00',
        texto: 'texto',
        aluno: null,
        status: 'inativo'
      }
    ];

    this.usuarios = [
      {
        id: 1,
        nome: 'Aluno',
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
      },
    ];



    this.logado = null;

   
  
  }

  login(email: string, senha: string) {
    for (let i = 0; i < this.usuarios.length; i++) {
      const usr = this.usuarios[i];
      if ((usr.email === email) && (usr.senha === senha)) {
        this.logado = usr;
        return;
      }
    }
    throw new Error("E-mail ou senha inválida");

  }

  cadastro(data: Date,hora: string,texto: string,status: string) {
    let horario = {
      data: data,
      hora: hora,
      texto: texto,
      aluno: 'rodolfo',
      status: status
     };

    this.listaDeHorarios.push(horario);
      for (let i = 0; i < this.listaDeHorarios.length; i++) {
        const element = this.listaDeHorarios[i];

        console.log(element.aluno);
        
      }
  }

  add(hora: string,nome){
    try {
      for (let i = 0; i < this.listaDeHorarios.length; i++) {
        const hr = this.listaDeHorarios[i];
        if(hr.hora === hora){
        hr.aluno = nome;
      }
    }
    } catch (error) {
      throw new Error("Usuario ja possui reserva");
    }
  }

    tira(hora: string,nome){
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

