import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlowListComponent } from './flow-list/flow-list.component';
import { FlowDetailsComponent } from './flow-details/flow-details.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import 'hammerjs';
import { AddFlowComponent } from './add-flow/add-flow.component';



const flowsRoutes: Routes = [
  { path: 'flows',  component: FlowListComponent },
  { path: 'flow/:id', component: FlowDetailsComponent },
  { path: 'flows/new',  component: AddFlowComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    RouterModule.forChild(flowsRoutes),
    MaterialModule.forRoot()
  ],
  declarations: [
    FlowListComponent, 
    FlowDetailsComponent, AddFlowComponent
    ]
})
export class FlowsModule { }
