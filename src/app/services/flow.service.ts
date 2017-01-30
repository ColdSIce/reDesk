import { Injectable } from '@angular/core';
import { Flow } from '../model/flow';
import { FlowType } from '../model/flowType';
import { Category } from '../model/category';

@Injectable()
export class FlowService{
    flows:Flow[];

    constructor(){
        this.flows = [
            new Flow(1, new Category("Работа", 1), "Зарплата", 30000, new Date(), new FlowType("Доход", 1)),
            new Flow(2, new Category("Работа", 1), "Зарплата", 12000, new Date(), new FlowType("Доход", 1)),
            new Flow(3, new Category("Продукты", 2), "Хлеб", 50, new Date(), new FlowType("Расход", 2)),
            new Flow(4, new Category("Продукты", 2), "Молоко", 55, new Date(), new FlowType("Расход", 2)),
            new Flow(5, new Category("Продукты", 1), "Тортик", 200, new Date(), new FlowType("Расход", 2)),
            new Flow(6, new Category("Продукты", 1), "Мясо", 600, new Date(), new FlowType("Расход", 2)),
            new Flow(7, new Category("Продукты", 1), "Колбаса", 310, new Date(), new FlowType("Расход", 2)),
            new Flow(8, new Category("Машина", 1), "Бензин", 1300, new Date(), new FlowType("Расход", 2)),
            new Flow(9, new Category("Машина", 1), "Масло", 1200, new Date(), new FlowType("Расход", 2)),
            new Flow(10, new Category("Одежда", 1), "Свитер", 999, new Date(), new FlowType("Расход", 2)),
            new Flow(11, new Category("Одежда", 1), "Комбинезон", 2825, new Date(), new FlowType("Расход", 2))
        ];
    }

    getFlows(){
        return this.flows;
    }

    getFlowById(id:number){
        let f = null;
        this.flows.forEach(flow => {
            if(flow.id == id){
                f = flow;
            } 
        });
        return f;
    }

    x(){
        
    }

    deleteFlows(flows:Flow[]){
        flows.forEach(flow => {
            this.flows.splice(this.flows.indexOf(flow), 1);
        });
    }

}
