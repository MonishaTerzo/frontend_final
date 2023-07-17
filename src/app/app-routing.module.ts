import { Component, NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { UpdateComponent } from './update/update.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { LoginComponent } from './login/login.component';
import { LeaveComponent } from './leave/leave.component';

const routes: Routes = [ 
  { 
    path:'login',
    component:LoginComponent
  },
  {
  path:'', 
component:LoginComponent} , 
{
  path:'home' ,
  component:HomeComponent
},
{ 
path:'employees',
component:EmployeeComponent
} , 
{
  path:'add-employee' ,
  component:CreateComponent
},

{ 
  path:'view/:id',
  component:ViewComponent
  } ,

  { 
    path:'update-employee/:id',
    component:UpdateComponent
    }, 
    { 
      path:'applyleave', 
      component:LeaveComponent
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
