import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlowListComponent } from './flow-list/flow-list.component';
import { FlowDetailsComponent } from './flow-details/flow-details.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import 'hammerjs';



const flowsRoutes: Routes = [
  { path: 'flows',  component: FlowListComponent },
  { path: 'flow/:id', component: FlowDetailsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    NgxDatatableModule,
    RouterModule.forChild(flowsRoutes),
    MaterialModule.forRoot()
  ],
  declarations: [
    FlowListComponent, 
    FlowDetailsComponent
    ]
})
export class FlowsModule { }
