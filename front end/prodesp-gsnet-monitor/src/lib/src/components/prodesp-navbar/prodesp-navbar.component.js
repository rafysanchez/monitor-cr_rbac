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
var config_service_1 = require("../../service/config.service");
var core_1 = require("@angular/core");
var ProdespNavbarComponent = (function () {
    function ProdespNavbarComponent(appConfig) {
        this.appConfig = appConfig;
        this.menus = [];
        this.navAccountIsOpen = false;
        this.isSideBarCollapsed = false;
    }
    ProdespNavbarComponent.prototype.ngOnInit = function () {
        console.log(this.navbarLogo);
    };
    ProdespNavbarComponent.prototype.toogleOpen = function (menu) {
        menu.isOpen = !menu.isOpen;
    };
    ProdespNavbarComponent.prototype.initMenus = function () {
    };
    ProdespNavbarComponent.prototype.toogleAccountConfig = function () {
        this.navAccountIsOpen = !this.navAccountIsOpen;
    };
    ProdespNavbarComponent.prototype.toogleSideBar = function () {
        this.isSideBarCollapsed = !this.isSideBarCollapsed;
    };
    ProdespNavbarComponent.prototype.logout = function () {
        var host = this.appConfig.getConfig('logoutRoute');
        location.href = host;
    };
    return ProdespNavbarComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ProdespNavbarComponent.prototype, "logoUser", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ProdespNavbarComponent.prototype, "navbarBrand", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ProdespNavbarComponent.prototype, "navbarLogo", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], ProdespNavbarComponent.prototype, "menus", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ProdespNavbarComponent.prototype, "user", void 0);
ProdespNavbarComponent = __decorate([
    core_1.Component({
        selector: 'prodesp-navbar',
        templateUrl: './prodesp-navbar.component.html',
        styleUrls: ['./prodesp-navbar.component.css']
    }),
    __metadata("design:paramtypes", [config_service_1.AppConfig])
], ProdespNavbarComponent);
exports.ProdespNavbarComponent = ProdespNavbarComponent;
//# sourceMappingURL=prodesp-navbar.component.js.map