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
var menu_service_1 = require("./../../service/menu.service");
var core_1 = require("@angular/core");
var ProdespSidebarComponent = (function () {
    function ProdespSidebarComponent(menuService) {
        this.menuService = menuService;
        this.menus = [];
    }
    ProdespSidebarComponent.prototype.ngOnInit = function () {
        this.menus = this.menuService.getMenus();
    };
    ProdespSidebarComponent.prototype.toogleOpen = function (menu) {
        menu.isOpen = !menu.isOpen;
    };
    return ProdespSidebarComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], ProdespSidebarComponent.prototype, "menus", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ProdespSidebarComponent.prototype, "isSideBarCollapsed", void 0);
ProdespSidebarComponent = __decorate([
    core_1.Component({
        selector: 'prodesp-sidebar',
        templateUrl: './prodesp-sidebar.component.html',
        styleUrls: ['./prodesp-sidebar.component.css']
    }),
    __metadata("design:paramtypes", [menu_service_1.MenuService])
], ProdespSidebarComponent);
exports.ProdespSidebarComponent = ProdespSidebarComponent;
//# sourceMappingURL=prodesp-sidebar.component.js.map