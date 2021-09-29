import { Component, OnInit } from '@angular/core';

import { GlobalVarsService } from '../global-vars.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {
  lista: any[];
  constructor(private varz: GlobalVarsService) {
    this.lista = varz.listaDeHorarios;
   }

  ngOnInit() {
    
  }

}
