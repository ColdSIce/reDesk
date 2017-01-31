import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Flow } from '../../model/flow';
import { FlowService } from '../../services/flow.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flow-list',
  templateUrl: './flow-list.component.html',
  styleUrls: ['./flow-list.component.css']
})
export class FlowListComponent implements OnInit {

  fs:FlowService;

	flows:Flow[];
  selected:Flow[] = [];
  nowSelected:boolean;
  editedFlow:Flow;
  editedResult:any;


  constructor(fserv:FlowService, private router: Router) {
      this.fs = fserv;
      this.flows = this.fs.getFlows();
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
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);

    if(this.selected.length > 0){
      this.nowSelected = true;
    }else{
      this.nowSelected = false;
    }
  }

  onActivate(event) {
    
  }

  isSingleSelected(){
    if(this.selected.length == 1){
      return true;
    }else{
      return false;
    }
  }

  deleteFlows(){
    this.fs.deleteFlows(this.selected);
    this.selected = [];
    this.nowSelected = false;
  }

  edit(){
    if(this.selected.length == 1)
    this.router.navigate(['/flow', this.selected[0].id]);
  }

  newFlow(){
    this.router.navigate(['/flows/new']);
  }


}

