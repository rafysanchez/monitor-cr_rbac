"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var http_1 = require("@angular/http");
var prodesp_gsnet_monitor_1 = require("prodesp-gsnet-monitor");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var ng2_bootstrap_modal_1 = require("ng2-bootstrap-modal");
var app_routing_1 = require("./app.routing");
//export const monitorRoutes: Routes = [   
//    {
//        path: 'cadastro', data: { breadcrumb: 'Cadastros', icon: 'fa-cogs' },
//        children: [
//            {
//                path: 'motivo-acao',
//                component: ProdespGsnetMonitorMotivoAcaoComponent,
//                data: [{
//                    breadcrumb: 'Motivos e Ações',
//                    title: 'Cadastros - Motivos e Ações  '
//                }]
//            },
//            {
//                path: 'parametros',
//                component: ProdespMonitorParametroComponent,
//                data: {
//                    breadcrumb: 'Parametros',
//                    title: 'Cadastros - Paramentros '
//                }
//            }
//        ]
//    },
//    {
//        path: 'caf', data: { breadcrumb: 'CAF', icon: 'fa-building-o' },
//        children: [
//            {
//                path: 'justificativa',
//                component: ProdespMonitorJustificativaComponent,
//                data: {
//                    breadcrumb: 'Justificativa',
//                    title: 'CAF - Justificativas  '
//                }
//            },
//        ]
//    }
//];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.ReactiveFormsModule, http_1.HttpModule, ng2_bootstrap_modal_1.BootstrapModalModule,
            ng_bootstrap_1.NgbModule.forRoot(), app_routing_1.routing, prodesp_gsnet_monitor_1.ProdespGsnetMonitorModule.forRoot()],
        declarations: [app_component_1.AppComponent],
        // TODO: precisa ler o conteúdo deste parâmetro do env.json
        providers: [{ provide: common_1.APP_BASE_HREF, useValue: '/Prodesp.Gsnet.Monitor.Angular/' }],
        //providers: [{ provide: APP_BASE_HREF, useValue: '' }],
        bootstrap: [app_component_1.AppComponent],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=module.js.map