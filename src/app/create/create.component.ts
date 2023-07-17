import { Component, OnInit } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';
import { Employees } from '../employees';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { Employee } from '../employee.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent  {   
  employee: Employee = new Employee(); 
    constructor(private appservice: AppService,private router: Router){  
    }
  saveEmployee(){  
   
    this.appservice.createemployee(this.employee);
    this.router.navigate(['employees']);
  }   
   
}

//  next1() { 
//     const  modelDiv=document.getElementById('job-details') 
//     const model2=document.getElementById('personal-details') 
//     const model3=document.getElementById('employee-details') 

    
   
//     if(modelDiv!=null && model2!=null && model3!=null){ 
//      model3.style.display='none'
//       modelDiv.style.display='none'; 
//       model2.style.display='block';
     
//     }
//   }

//   next2() { 
//     const  modelDiv=document.getElementById('job-details') 
//     const model2=document.getElementById('personal-details') 
//     const model3=document.getElementById('employee-details') 

    
   
//     if(modelDiv!=null && model2!=null && model3!=null){ 
//      model3.style.display='block'
//       modelDiv.style.display='none'; 
//       model2.style.display='none';
     
//     }
//   }

// submitted(){ 
 
    
//   }

 
// }
