"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var menu_1 = require("./../models/menu");
var prodesp_core_1 = require("prodesp-core");
var core_1 = require("@angular/core");
var MenuService = (function () {
    function MenuService(webStorage) {
        this.webStorage = webStorage;
    }
    MenuService.prototype.getMenus = function () {
        return [
            new menu_1.Menu('#', 'fa-cogs', 'Cadastros', [
                new menu_1.Menu('parametros', '', 'Parâmetros', null),
                new menu_1.Menu('ItensPorPrograma', '', 'Itens por Farmácia', null),
                new menu_1.Menu('motivo-acao', '', 'Motivos e Ações', null)
            ], 1),
            new menu_1.Menu('#', 'fa-building-o', 'CAF', [
                new menu_1.Menu('/justificativa', '', 'Justificativas', null)
            ], 2),
        ];
    };
    return MenuService;
}());
MenuService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [prodesp_core_1.WebStorage])
], MenuService);
exports.MenuService = MenuService;
//# sourceMappingURL=menu.service.js.map