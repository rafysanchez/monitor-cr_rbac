"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Menu = (function () {
    function Menu(Url, CdIcon, Titulo, Menus, NrOrdem, isOpen) {
        if (Menus === void 0) { Menus = []; }
        if (NrOrdem === void 0) { NrOrdem = 0; }
        if (isOpen === void 0) { isOpen = false; }
        this.Url = Url;
        this.CdIcon = CdIcon;
        this.Titulo = Titulo;
        this.Menus = Menus;
        this.NrOrdem = NrOrdem;
        this.isOpen = isOpen;
    }
    return Menu;
}());
exports.Menu = Menu;
//# sourceMappingURL=menu.js.map