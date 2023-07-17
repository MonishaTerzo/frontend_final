import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppService } from '../app.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent{
updateEmployee(arg0: any) {
throw new Error('Method not implemented.');
} 



  employee:any;
  query!:string
  filteredEmployees: any[] = [];
    constructor(private service:AppService , private router:Router) {
      this.service.getEmployee().subscribe((data: any) => {
        this.employee = data;
      }, (error: { status: number; }) => {
        if (error instanceof HttpErrorResponse && error.status === 403 || error.status ===401) {
          localStorage.clear();
          this.router.navigate(['']);
        }
      });
    }
        
    form = new FormGroup({
      search:new FormControl('',[Validators.required])
    })
    
    employees!:any[]
  deleteUser(id: number){
    this.service.deleteUser(id).subscribe(data => {
      this.employees = this.employees?.filter(employee => employee.id !== id);
      setTimeout(()=>{
        window.location.reload();
      }, 100);
    })
  }
  searchUser(){
    this.service.searchUsers(this.query).subscribe(data => {
      this.employees = data;
      console.log(this.employees)
    })
  }
 
  // filterEmployees(event: any) {
  //   const searchTerm = event?.target?.value?.toLowerCase() || '';
  //   if (this.employee && Array.isArray(this.employee)) {
  //     this.filteredEmployees = this.employee.filter((emp: any) =>
  //       emp.name.toLowerCase().includes(searchTerm)
  //     );
  //   } else {
  //     // If the employee array is not available or not an array, initialize filteredEmployees as an empty array
  //     this.filteredEmployees = [];
  //   }
  // }
    // EditEmployee(id:number){ 
    //   console.log(id);
    //   this.router.navigate(["update",id])
    // }

    ViewEmployee(id:number){ 
      this.router.navigate(['view',id])
    } 
   editEmployee(id:number){ 
      this.router.navigate(['update-employee',id])
    } 

}
