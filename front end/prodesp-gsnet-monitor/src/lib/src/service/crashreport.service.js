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
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var CrashreportService = (function () {
    function CrashreportService(http) {
        this.http = http;
    }
    CrashreportService.prototype.sendReport = function (error) {
        debugger;
        var log = {};
        log.Message = 'Erro em prodesp-gsnet-monitor';
        log.Source = error.message;
        log.Result = error.stack;
        var options = new http_1.RequestOptions();
        var headers = new http_1.Headers();
        headers.append('Content-type', 'application/json');
        options.headers = headers;
        try {
            this.http.post('http://localhost:62515/api/crash/add', log).subscribe();
        }
        catch (e) {
            debugger;
        }
    };
    CrashreportService.prototype.logError = function (e) {
        console.log(e);
    };
    return CrashreportService;
}());
CrashreportService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], CrashreportService);
exports.CrashreportService = CrashreportService;
var ProdespErrorHandler = (function () {
    function ProdespErrorHandler(injector) {
        this.injector = injector;
    }
    ProdespErrorHandler.prototype.handleError = function (err) {
        this.reportService = this.injector.get(CrashreportService);
        try {
            this.reportService.sendReport(err);
        }
        catch (e) {
            debugger;
        }
    };
    ProdespErrorHandler.prototype.customStringify = function (v) {
        var cache = new Map();
        return JSON.stringify(v, function (key, value) {
            if (typeof value === 'object' && value !== null) {
                if (cache.get(value)) {
                    return;
                }
                cache.set(value, true);
            }
            return value;
        });
    };
    return ProdespErrorHandler;
}());
ProdespErrorHandler = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [core_1.Injector])
], ProdespErrorHandler);
exports.ProdespErrorHandler = ProdespErrorHandler;
//# sourceMappingURL=crashreport.service.js.map