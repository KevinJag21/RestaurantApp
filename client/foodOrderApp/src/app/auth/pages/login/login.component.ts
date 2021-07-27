import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../assets/auth.css']
})
export class LoginComponent implements OnInit {

  constructor(private router : Router, private authSvc : AuthService) { }

  ngOnInit(): void {
  }

  login(){
   // this.router.navigate(['./user']);
    
    this.authSvc.login("johndue@gmail.com","").subscribe(
      resp =>{
        console.log(resp); 
        this.router.navigate(['./user']);},
      error =>{
        console.log("error", error);
      }
      
    );
  }

}
