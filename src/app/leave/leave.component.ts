import { Component } from '@angular/core';
import { Leave } from '../leave';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent {


  employee: Leave = new Leave(); 
  
    constructor(private appservice: AppService,private router: Router){
      this.appservice.createemployee(this.employee);
    (error: { status: number; }) => {
      if (error instanceof HttpErrorResponse && error.status === 403 || error.status ===401) {
        localStorage.clear();
        this.router.navigate(['']);
      }
    }}
  saveEmployee(){ 
    this.router.navigate(['/employees']);
  }   
          
 

}