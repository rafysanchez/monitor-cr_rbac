import { AppConfig } from './../service/config.service';
import { Http } from '@angular/http';
import { BaseService } from 'prodesp-core';
import { Injectable } from '@angular/core';
import { ProgramaSaude } from '../../../../out-tsc/lib/src/models/programa.saude.model';

@Injectable()
export class ProgramaSaudeService extends BaseService<ProgramaSaude> {

    constructor(http: Http, appConfig: AppConfig) {
        super(appConfig.getConfig('host') + 'api/programaSaude', http);
    }
}
