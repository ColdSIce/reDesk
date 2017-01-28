import { Component, OnInit } from '@angular/core';
import { Flow } from '../../model/flow';
import { FlowService } from '../../services/flow.service';

@Component({
  selector: 'app-flow-list',
  templateUrl: './flow-list.component.html',
  styleUrls: ['./flow-list.component.css']
})
export class FlowListComponent implements OnInit {

	flows:Flow[];
  selected = [];
  nowSelected:boolean;

  constructor(private fs:FlowService) {
      this.flows = fs.getFlows();
      this.nowSelected = false;
  }

  ngOnInit() {
  }

  columns = [
    { prop: 'dateString', name: 'Дата', canAutoResize: true },
    { prop: 'type.name', name: 'Тип', canAutoResize: true },
    { prop: 'name', name: 'Наименование', canAutoResize: true },
    { prop: 'category.name', name: 'Категория', canAutoResize: true },
    { prop: 'price', name: 'Цена (руб)', canAutoResize: true }
  ];
  

  onSelect({ selected }) {
    console.log('Select Event', selected, this.selected);

    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);

    if(this.selected.length > 0){
      this.nowSelected = true;
    }else{
      this.nowSelected = false;
    }
  }

  onActivate(event) {
    console.log('Activate Event', event);
  }

}
