import { Component, OnInit } from '@angular/core';
import { Flow } from '../../model/flow';
import { FlowService } from '../../services/flow.service';
import { CategoryService } from '../../services/category.service';
import { FlowTypeService } from '../../services/flowType.service';
import { Category } from '../../model/category';
import { FlowType } from '../../model/flowType';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flow-details',
  templateUrl: './flow-details.component.html',
  styleUrls: ['./flow-details.component.css']
})
export class FlowDetailsComponent implements OnInit {

  flow:Flow;
  categories:Category[];
  flowTypes:FlowType[];
  flowDetailsForm:FormGroup;
  error:string;

  constructor(
    private fs:FlowService, 
    private cs:CategoryService,
    private fts:FlowTypeService,
    private route:ActivatedRoute,
    private formBuilder: FormBuilder,
    private router:Router) {
  }

  ngOnInit() {
    let id = +this.route.snapshot.params['id'];
    let tmp = this.fs.getFlowById(id);
    if(tmp != null) this.flow = tmp;

    this.categories = this.cs.getCategories();
    this.flowTypes = this.fts.getFlowTypes();

    this.flowDetailsForm = this.formBuilder.group({
      name: [this.flow.name, Validators.required],
      type: [this.flow.type.name, Validators.required],
      category: [this.flow.category.name, Validators.required],
      price: [this.flow.price, Validators.required],
    });
 
    this.error = '';
  }

  editFlow(){

    let cat;
    let tp;

    this.flowTypes.forEach(t => {
      if(t.name === this.flowDetailsForm.value.type){
        tp = t;
      }
    });

    this.categories.forEach(c => {
      if(c.name === this.flowDetailsForm.value.category){
        cat = c;
      }
    });

    if (this.flowDetailsForm.valid) {
      this.flow.name = this.flowDetailsForm.value.name;
      this.flow.type = tp;
      this.flow.category = cat;
      this.flow.price = this.flowDetailsForm.value.price;
      this.fs.updateFlow(this.flow);
      this.error = '';

      this.router.navigate(['/flows']);
    }else{
      this.error = 'Не заполнены обязательные поля';
    }
  }

}
