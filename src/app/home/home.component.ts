import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AppService } from '../app.service';
import { UserService } from '../user-service.service';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] 

})
export class HomeComponent implements OnInit { 
  holiday: any; 
  username: string="monisha"; 
  birthdayBuddies!: Employee[];
  employee!:Employee;
  leaves!:any;


  constructor(
    private http: HttpClient,
    private router: Router,
    private service: AppService,
    private userService: UserService
  ) {
    this.service.getUnApprovedLeave().subscribe(data=>
      { this.leaves=data
     }
       ,(error) => {
         if (error instanceof HttpErrorResponse && error.status === 403 || error.status ===401) {
           localStorage.clear();
           this.router.navigate(['']);
         }
       });
  }       

  ngOnInit(): void {
    this.service.getHoliday().subscribe(
      (data: any) => {
        this.holiday = data;
      },
      (error: HttpErrorResponse) => {
        if (error.status === 403 || error.status === 401) {
          localStorage.clear();
          this.router.navigate(['']);
        }
      }
    ); 
   

    
      this.service.getRecentBirthdays().subscribe(
        (data: Employee[]) => {
          this.birthdayBuddies = data;
        },
        (error: HttpErrorResponse) => {
          console.error('Error occurred while retrieving recent birthdays:', error);
        }
      );
      


    this.userService.getUsername().subscribe( 
      (data:any) => {
        this.username = data; 
        console.log(data);
      },
      (error: HttpErrorResponse) => {
        console.error('Error occurred while retrieving username:', error);
      }
    );                      
    
  }
      view() { 
        const  modelDiv=document.getElementById('leave') 
        const model2=document.getElementById('leave-display') 
        
       
        if(modelDiv!=null && model2!=null){ 
       
          modelDiv.style.display='block'; 
          model2.style.display='none';
         
        }
      }


      getLeaveInfo(leave:any):Employee{
        this.service.getLeaveByEmployee(leave).subscribe(data=>
          this.employee=data
         ,(error) => {
          if (error instanceof HttpErrorResponse && error.status === 403 || error.status ===401) {
            localStorage.clear();
            this.router.navigate(['']);
          }
        });
        return this.employee
      }
      
     minimize() {  
      console.log(1);
        const  modelDiv=document.getElementById('leave') 
        const model2=document.getElementById('leave-display') 
        
       
        if(modelDiv!=null && model2!=null){ 
       
          modelDiv.style.display='none'; 
          model2.style.display='block';
          
        }
      }
    
    }

function getLeaveInfo(leave: any, any: any) {
  throw new Error('Function not implemented.');
}
    // export class EmployeeComponent implements OnInit{ 
    //   employee:any;
    //     constructor(private http:HttpClient,private router:Router){}
        
    //     ngOnInit():void{
    //     let response= this.http.get("http://localhost:7000/api/employees/list") 
    //     response.subscribe((data)=>this.employee=data);
    //     }

    