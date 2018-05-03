import { Menu } from './../models/menu';
import { WebStorage } from "prodesp-core";
import { Injectable } from "@angular/core";

@Injectable()
export class MenuService {
  constructor(private webStorage: WebStorage) {}

  getMenus(): Menu[] {
  /*   const menus = this.webStorage.get("menus");
    if (menus) return JSON.parse(menus); */
    return  [
      new Menu('#', 'fa-cogs', 'Cadastros', [
              new Menu('parametros', '', 'Parâmetros', null),
              new Menu('ItensPorPrograma', '', 'Itens por Farmácia', null),
              new Menu('motivo-acao', '', 'Motivos e Ações', null)
            ], 1),
      new Menu('#', 'fa-building-o', 'CAF', [
        new Menu('/justificativa', '', 'Justificativas', null)
      ], 2),
  ];
  }
}
