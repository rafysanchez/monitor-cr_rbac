import { AppConfig } from './../../service/config.service';
import { Component, OnInit, Input } from '@angular/core';
import { Acao } from '../../models/acao';
import { Motivo } from '../../models/motivo';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'prodesp-justificativa',
  templateUrl: './prodesp-justificativa.component.html',
  styleUrls: ['./prodesp-justificativa.component.css']
})
export class ProdespJustificativaComponent implements OnInit {

  @Input()idItem: number;
  @Input()idItemGsnet: number;
  @Input()idGestor: number;
  @Input()idJustificador: number;
  @Input()acoes: Acao[]= [];
  @Input()motivos: Motivo[] = [];
  constructor(userService: UserService) {
    let user = userService.getUser();
    this.idJustificador = user.IdJustificador;
  }
  ngOnInit() {
  }
}
