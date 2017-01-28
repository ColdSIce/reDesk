import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlowsModule } from './flows/flows.module';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { FlowService } from './services/flow.service';
import { CategoryService } from './services/category.service';
import { FlowTypeService } from './services/flowType.service';
import { MaterialModule } from '@angular/material';
import 'hammerjs';


const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: 'about', pathMatch: 'full'},
  { path:'**', component: PageNotFoundComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlowsModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule.forRoot()
  ],
  providers: [
    FlowService,
    CategoryService,
    FlowTypeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
