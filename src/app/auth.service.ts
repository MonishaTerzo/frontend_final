// import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';
// import { JwtHelperService } from '@auth0/angular-jwt';


// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService { 
//   jwtHelper =new JwtHelperService();

//   constructor(private router:Router) { } 

//   isAdmin(){
//     const token = localStorage.getItem("token");
//     let jwt : string="";
//     if(token){
//        jwt = token;
//     }else{
//       this.router.navigate(["/login"]);
//       return false
//     }
//     const decodedToken = this.jwtHelper.decodeToken(jwt);
//     const authority = decodedToken.roles[0].authority;
//     console.log(authority)
//     if(authority === "ROLE_ADMIN")return true;
//     return false
//   }
// }
