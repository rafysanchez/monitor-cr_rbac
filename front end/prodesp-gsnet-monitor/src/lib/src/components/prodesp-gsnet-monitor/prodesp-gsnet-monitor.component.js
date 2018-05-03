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
var core_1 = require("@angular/core");
var menu_service_1 = require("../../service/menu.service");
var user_service_1 = require("../../service/user.service");
var ProdespGsnetMonitorComponent = (function () {
    function ProdespGsnetMonitorComponent(userService, menuService) {
        this.userService = userService;
        this.menuService = menuService;
        this.menus = [];
    }
    ProdespGsnetMonitorComponent.prototype.ngOnInit = function () {
        this.menus = this.menuService.getMenus() || [];
        var user = this.userService.getUser();
        if (!user) {
            user = {};
        }
        this.user = user;
    };
    return ProdespGsnetMonitorComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ProdespGsnetMonitorComponent.prototype, "logoUser", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ProdespGsnetMonitorComponent.prototype, "navbarBrand", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ProdespGsnetMonitorComponent.prototype, "navbarLogo", void 0);
ProdespGsnetMonitorComponent = __decorate([
    core_1.Component({
        selector: 'prodesp-gsnet-monitor',
        templateUrl: './prodesp-gsnet-monitor.component.html',
        styleUrls: ['./prodesp-gsnet-monitor.component.css']
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, menu_service_1.MenuService])
], ProdespGsnetMonitorComponent);
exports.ProdespGsnetMonitorComponent = ProdespGsnetMonitorComponent;
//# sourceMappingURL=prodesp-gsnet-monitor.component.js.map