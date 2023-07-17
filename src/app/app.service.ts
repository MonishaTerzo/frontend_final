import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { User } from './user';
import { Employees } from './employees';
import { EmployeeComponent } from './employee/employee.component';
import { Employee } from './employee.model';
import { LoginData } from './login-data';

@Injectable({
  providedIn: 'root'
})
export class AppService {                
  private url = "http://localhost:7000/";

  constructor(private http: HttpClient) { }

  // // Add User - Create
  // adduser(user: User){
  //   return this.http.post<User>(`${this.url}add`, user)
  // }

  // // Get Users - Read
  // getUsers(): Observable<any[]>{
  //   return this.http.get<any[]>(this.url+'users')
  // }

  // Get User by Id - Read
  getEmployeeById(id: number): Observable<Employee>{
    const jwt=localStorage.getItem('jwtToken');
    const headers=new HttpHeaders().set('Authorization',`Bearer ${jwt}`)
    return this.http.get<Employee>(`${this.url}api/employees/${id}`,{headers})
  }  
 searchUsers(query:string):Observable<any[]>{
    const jwtToken = localStorage.getItem('jwtToken'); 
   
    const headers = new HttpHeaders().set('Authorization',`Bearer ${jwtToken}`);
   
    console.log(query);
    return this.http.get<any[]>(this.url+`api/employees/search/${query}`,{headers})
  }
  // UpdateEmployee(employee){ 

  //   return this.http.put<employee>(`${this.url}employees/update`)

  getLeaveByEmployee(leaves:any){
    const jwt=localStorage.getItem('jwtToken');
    const headers=new HttpHeaders().set('Authorization',`Bearer ${jwt}`)
    return this.http.post<Employee>(`${this.url}api/employee/leave`,leaves,{headers})
   }  
   getUnApprovedLeave(){
    const jwt=localStorage.getItem('jwtToken');
    const headers=new HttpHeaders().set('Authorization',`Bearer ${jwt}`)
    return this.http.get<any>(`${this.url}leaves/unapproved`,{headers})
   }


  // Update User - Update
  updateUser(id?: number , employee?: any): Observable<any>{
    const jwt=localStorage.getItem('jwtToken');
    const headers=new HttpHeaders().set('Authorization',`Bearer ${jwt}`)
    return this.http.put<any>(`${this.url}api/employees/${id}`, employee,{headers})
  }
  deleteUser(id: number): Observable<any>{
    const jwt=localStorage.getItem('jwtToken');
  const headers=new HttpHeaders().set('Authorization',`Bearer ${jwt}`)
    console.log(id);
    return this.http.delete<any>(`${this.url}api/employees/${id}`,{headers})
  }
  // // Delete User - Delete
  // deleteUser(id: number): Observable<any>{
  //   return this.http.delete<any>(`${this.url}delete/${id}`)
  // } 


  createemployee(employee : any)
{ 
  console.log(employee)
  const jwt=localStorage.getItem('jwtToken');
  const headers=new HttpHeaders().set('Authorization',`Bearer ${jwt}`)
  this.http.post(`${this.url}api/employees/add`,employee,{headers})
  .subscribe(
    () => {
      console.log('Object saved successfully!');
      // Perform any additional actions upon successful saving
    },
    (error) => {
      console.error('Error occurred while saving the object:', error);
      // Handle the error appropriately
    }
  );
} 




getRecentBirthdays(): Observable<Employee[]> {
  const jwt=localStorage.getItem('jwtToken');
  const headers=new HttpHeaders().set('Authorization',`Bearer ${jwt}`)
  return this.http.get<Employee[]>(`${this.url}api/recent-birthdays`,{headers})
}


login(loginCredentials:LoginData):Observable<any>{
  console.log(loginCredentials)
  return this.http.post(`${this.url}login`,loginCredentials) 
  
}
getHoliday() :Observable<any[]>{
  const jwt=localStorage.getItem('jwtToken');
  const headers=new HttpHeaders().set('Authorization',`Bearer ${jwt}`)
  return this.http.get<any[]>(`${this.url}holidays/list`,{headers})
}     

getEmployee():Observable<any[]>{
  const jwt=localStorage.getItem('jwtToken');
    const headers=new HttpHeaders().set('Authorization',`Bearer ${jwt}`)
    return this.http.get<any[]>(this.url+'api/employee/list',{headers});
}

}  

