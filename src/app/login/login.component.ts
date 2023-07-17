import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { tick } from '@angular/core/testing';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  role!:string;
  isAdmin:boolean=false;
  constructor(private service:AppService,private router:Router){
  }
  data:any
  jwtToken!:any
  form = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })
login() {
  this.data=this.form.value;
  console.log(this.data);
  this.service.login(this.data).subscribe(response=>{
    this.jwtToken=response['jwt'];
    console.log(this.jwtToken);
    localStorage.setItem('jwtToken',this.jwtToken);
    console.log(localStorage.getItem('jwtToken'));
    this.router.navigate(['home']).then(()=>{
      window.location.reload();
    })
    }
  )
}
}








