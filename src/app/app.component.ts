import { Component } from '@angular/core';
import {  Router } from '@angular/router';

declare var jquery:any;
declare var $ :any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bookingPortail';
  error : string ;
user ={
  email : '',
  password :''
}
 
  constructor( private router: Router ) {
  }

  Login(user :any){
   if(user.email ==='admin' && user.password ==='admin'){
    this.router.navigate(['famille']);
    $("#exampleModal .close").click()

   }else{
     this.error = "Error"
     this.router.navigate(['/home']);
   }

  }
}
