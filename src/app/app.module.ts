import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employee-list.component';
import { EmployeeCountComponent } from './employee/employee-count.component';
import { EmployeePipePipe } from './employee/employee-pipe.pipe';
import { EmployeeService } from './employee/employee-service.service';
import {HttpModule} from '@angular/http';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
{path:'employees',component:EmployeeListComponent},
{path:'home',component:HomeComponent},
{path:'',redirectTo:'/home',pathMatch:'full'},
{path:'**',component:PageNotFoundComponent}


]
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeListComponent,
    EmployeeCountComponent,
    EmployeePipePipe,
    HomeComponent,
    PageNotFoundComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
