import { Component, OnInit } from '@angular/core';

import { AppService } from '../app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent { 
  id !:number
  employee: Employee = new Employee(); 
  constructor(private employeeservice: AppService, private route: ActivatedRoute ,private router :Router){ 
  this.id=this.route.snapshot.params['id']
  this.employeeservice.getEmployeeById(this.id).subscribe(data=>{
    this.employee=data;},
    error=>console.log(error));
    }                                                                     
  updateEmployee(){ 
    this.employeeservice.updateUser(this.id,this.employee).subscribe(data=>{ 
this.gotoEmployeeList(); 
    } ,
    error=>console.log());
  }
  
  gotoEmployeeList(){ 
    this.router.navigate(['/employees']);
      }

  }
 


  // constructor(private appservice: AppService,private router: Router){} 
  // ngOnInit(): void { 
  //   this.appservice.subscribe.get(data=>{this.employee=data;},error=> console.log(error))
  // }  