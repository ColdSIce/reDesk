import { FlowType } from './flowType';
import { Category } from './category';

export class Flow{
    public dateString:string;
    constructor(
        public id:number,
        public category:Category,
        public name:string,
        public price:number,
        public date:Date,
        public type:FlowType
    ){
        this.setDate(date);
    }

    setDate(newDate:Date){
        this.date = newDate;

        let day:string = "" + newDate.getDate();
        let month:string = "" + (newDate.getMonth() + 1);
        let year:string = "" + newDate.getFullYear();
        let hours:string = "" + newDate.getHours();
        let mins:string = "" + newDate.getMinutes();
        let secs:string = "" + newDate.getSeconds();

        if(secs.length == 1){
            secs = "0" + secs;
        }

        if(mins.length == 1){
            mins = "0" + mins;
        }

        if(secs.length == 1){
            secs = "0" + secs;
        }

        if(day.length == 1){
            day = "0" + day;
        }

        if(month.length == 1){
            month = "0" + month;
        }

        this.dateString = year + "-" + month + "-" + day + " " + hours + ":" + mins + ":" + secs;
    }
}