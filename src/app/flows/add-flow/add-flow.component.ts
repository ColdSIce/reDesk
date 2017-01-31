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
  selector: 'app-add-flow',
  templateUrl: './add-flow.component.html',
  styleUrls: ['./add-flow.component.css']
})
export class AddFlowComponent implements OnInit {

  categories:Category[];
  flowTypes:FlowType[];
  addFlowForm:FormGroup;
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
    this.categories = this.cs.getCategories();
    this.flowTypes = this.fts.getFlowTypes();

    this.addFlowForm = this.formBuilder.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      category: ['', Validators.required],
      price: [0, Validators.required],
      checked: [false]
    });
 
    this.error = '';
  }

  saveFlow(){
    if (this.addFlowForm.valid) {
        this.fs.save(new Flow(
          0,
          this.addFlowForm.value.category,
          this.addFlowForm.value.name,
          this.addFlowForm.value.price,
          new Date(),
          this.addFlowForm.value.type
        ));

        let flag = this.addFlowForm.value.checked;

        this.addFlowForm = this.formBuilder.group({
          name: ['', Validators.required],
          type: ['', Validators.required],
          category: ['', Validators.required],
          price: [0, Validators.required],
          checked: [false]
        });
        this.error = '';

        if(!flag){
          this.router.navigate(['/flows']);
        }
    }else{
        this.error = 'Не заполнены обязательные поля';
    }
  }

}
