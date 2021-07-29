import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

    private isValidEmail = /[a-zA-Z0-9._]+@[a-z0-9.]+\.[a-z]{2,}$/;
  
    constructor(private router : Router, private authSvc : AuthService, private fb: FormBuilder) { }
  
    emailVld = [Validators.required, Validators.pattern(this.isValidEmail)];
    passVld = [Validators.required, Validators.minLength(6)];
    nameVld = [Validators.required]
    addressVld = [Validators.required]
  
    baseForm = this.fb.group({
      NAME: new FormControl('',this.nameVld),
      ADDRESS: new FormControl('',this.addressVld),
      EMAIL: new FormControl('', this.emailVld ),
      PASSWORD: new FormControl('',this.passVld )       
    });
    
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
  
    /**form validation */
  
    getErrorMessage(field: string): string{
      let msg : string = '';
  
      if(field == 'EMAIL'){
        if(this.baseForm.get(field)?.errors?.required){
          return 'The email is required';
          
        }else if(this.baseForm.get(field)?.hasError('pattern')){
          return 'Must be a valid email';
          //return msg;
        }
      }

      if(field == 'NAME'){
        if(this.baseForm.get(field)?.errors?.required){
          return 'The name is required';
          
        }
      }

      if(field == 'ADDRESS'){
        if(this.baseForm.get(field)?.errors?.required){
          return 'The address is required';
          
        }
      }
  
      if(field == 'PASSWORD'){
        if(this.baseForm.get(field)?.errors?.required){
          return 'The password is required';
          //return msg;
        }else if(this.baseForm.get(field)?.hasError('minlength')){
          const minLength = this.baseForm.get(field)?.errors?.minlength?.requiredLength;
          return `Must have ${minLength} characters`; 
          //return msg;
        }
      }
  
      return msg;
    }
  
    isValidField(field: string): boolean{
      
      return ((this.baseForm.get(field)!.touched || this.baseForm.get(field)!.dirty) && 
      !this.baseForm.get(field)!.valid);
    }
  }
  
