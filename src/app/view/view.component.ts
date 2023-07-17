import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppService } from '../app.service';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  employees:any;
  constructor(private service:AppService, private route:ActivatedRoute, private router:Router){}
  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.service.getEmployeeById(id).subscribe(data => {
      this.employees = data
      console.log(this.employees) 
      console.log(this.employees.dob)
    })
  }
  

  openModal() { 

    // const modelDiv=document.getElementById('modal')
    // if(modelDiv!=null){ 
    //   modelDiv.style.display='block';
    //   console.log("hello")
    // }  
    this.router.navigate(['update-employee'])

  }
  closeModal() { 
    const modelDiv=document.getElementById('modal') 
    if(modelDiv!=null){ 
      modelDiv.style.display='none';
    }
  } 
  openJob(){}
}