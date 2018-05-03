"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var ng2_bootstrap_modal_1 = require("ng2-bootstrap-modal");
var core_1 = require("@angular/core");
var prodesp_ui_1 = require("prodesp-ui");
var user_service_1 = require("../../service/user.service");
var ProdespMonitorModalAcaoBlocoComponent = (function (_super) {
    __extends(ProdespMonitorModalAcaoBlocoComponent, _super);
    function ProdespMonitorModalAcaoBlocoComponent(dialogService, userService) {
        var _this = _super.call(this, dialogService) || this;
        _this.userService = userService;
        _this.ErrorCAF = null;
        return _this;
    }
    ProdespMonitorModalAcaoBlocoComponent.prototype.ngOnInit = function () {
        this.usuarioCAF = this.userService.getUser().IdJustificador === 2;
    };
    ProdespMonitorModalAcaoBlocoComponent.prototype.salvar = function () {
        if (this.isValid()) {
            this.result = {
                UsarJustificativaCAF: this.UsarJustificativaCAF,
                UsarJustificativaCAFPublica: this.UsarJustificativaCAFPublica
            };
            this.closeModal();
        }
        this.ErrorCAF = true;
    };
    ProdespMonitorModalAcaoBlocoComponent.prototype.isValid = function () {
        if (!this.usuarioCAF) {
            return true;
        }
        else {
            return this.UsarJustificativaCAF || this.UsarJustificativaCAFPublica;
        }
    };
    return ProdespMonitorModalAcaoBlocoComponent;
}(prodesp_ui_1.ModalComponent));
ProdespMonitorModalAcaoBlocoComponent = __decorate([
    core_1.Component({
        selector: 'app-prodesp-monitor-modal-deletar',
        templateUrl: './prodesp-monitor-modal-deletar.component.html',
        styleUrls: ['./prodesp-monitor-modal-deletar.component.css']
    }),
    __metadata("design:paramtypes", [ng2_bootstrap_modal_1.DialogService, user_service_1.UserService])
], ProdespMonitorModalAcaoBlocoComponent);
exports.ProdespMonitorModalAcaoBlocoComponent = ProdespMonitorModalAcaoBlocoComponent;
//# sourceMappingURL=prodesp-monitor-modal-deletar.component.js.map