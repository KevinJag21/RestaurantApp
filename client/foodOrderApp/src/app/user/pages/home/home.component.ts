import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { User } from '../../../auth/interfaces/user.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  status : boolean = false;
  
  get authUser (){
    return this.authSvc.auth;
  }

  constructor(private router : Router, private authSvc : AuthService) { }

  ngOnInit(): void {
    
  }

  logout(){
    this.authSvc.logout();
    this.router.navigate(['./auth/login']);
  }
  
  clickEvent(){
    this.status = true;       
}
//Sidebar close
clickEvent2()
{
  this.status = false; 
}
}
