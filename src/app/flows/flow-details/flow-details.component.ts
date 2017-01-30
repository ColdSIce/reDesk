import { Component, OnInit } from '@angular/core';
import { Flow } from '../../model/flow';
import { FlowService } from '../../services/flow.service';
import { Category } from '../../model/category';
import { FlowType } from '../../model/flowType';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-flow-details',
  templateUrl: './flow-details.component.html',
  styleUrls: ['./flow-details.component.css']
})
export class FlowDetailsComponent implements OnInit {

  flow:Flow;

  constructor(private fs:FlowService, private route:ActivatedRoute) {
      
  }

  ngOnInit() {
    let id = +this.route.snapshot.params['id'];
    let tmp = this.fs.getFlowById(id);
    if(tmp != null) this.flow = tmp;
  }

}
