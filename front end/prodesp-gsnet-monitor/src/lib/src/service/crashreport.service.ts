import { Log } from './crashreport.service';
import { Observable } from 'rxjs/Rx';
import { BaseService } from 'prodesp-core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Injectable, ErrorHandler, Injector } from '@angular/core';
export interface Log {
  Id: number;
  Message: string;
  Result: string;
  Data: string;
  Source: string;
}
@Injectable()
export class CrashreportService {
  constructor(private http: Http) {
    // super("http://localhost:62515/api/crash", http);
  }
  sendReport(error: any) {
    debugger;
    let log = {} as Log;
    log.Message = 'Erro em prodesp-gsnet-monitor';
    log.Source = error.message;
    log.Result = error.stack;
    const options: RequestOptions = new RequestOptions();
    const headers: Headers = new Headers();
    headers.append('Content-type', 'application/json');
    options.headers = headers;

    try {
      this.http.post('http://localhost:62515/api/crash/add', log).subscribe();
    } catch (e) {
      debugger;
    }
    /*   this.http.post('http://localhost:62515/api/crash', error).map((response: Response) => {
      }).catch(error=> null).subscribe(); */
  }
  logError(e: any) {
    console.log(e);
  }
}
@Injectable()
export class ProdespErrorHandler implements ErrorHandler {
  reportService: CrashreportService;
  constructor(private injector: Injector) {
    // private reportService: CrashreportService) {
   // super(false);
  }
  handleError(err: any): void {
    this.reportService = this.injector.get(CrashreportService);

    try {
      this.reportService.sendReport(err);
    } catch (e) {
        debugger
    }

   // super.handleError(err);
  }
  customStringify(v: any) {
    const cache = new Map();
    return JSON.stringify(v, function(key, value) {
      if (typeof value === 'object' && value !== null) {
        if (cache.get(value)) {
          // Circular reference found, discard key
          return;
        }
        // Store value in our map
        cache.set(value, true);
      }
      return value;
    });
  }
}
