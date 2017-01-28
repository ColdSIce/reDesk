import { Injectable } from '@angular/core';
import { FlowType } from '../model/flowType';

@Injectable()
export class FlowTypeService{
    flowTypes:FlowType[];

    constructor(){
        this.flowTypes = [
            new FlowType("Доход", 1),
            new FlowType("Расход", 2)
        ];
    }

    getFlowTypes(){
        return this.flowTypes;
    }

}
