import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../assets/auth.css']
})
export class LoginComponent implements OnInit {

  private isValidEmail = /[a-zA-Z0-9._]+@[a-z0-9.]+\.[a-z]{2,}$/;

  constructor(private router : Router, private authSvc : AuthService, private fb: FormBuilder) { }

  emailVld = [Validators.required, Validators.pattern(this.isValidEmail)];
  passVld = [Validators.required, Validators.minLength(6)];

  baseForm = this.fb.group({
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
        return 'Debe ingresar un correo electrónico';
        
      }else if(this.baseForm.get(field)?.hasError('pattern')){
        return 'Debe ingresar un correo electrónico válido';
        //return msg;
      }
    }

    if(field == 'PASSWORD'){
      if(this.baseForm.get(field)?.errors?.required){
        return 'Debe ingresar una contraseña';
        //return msg;
      }else if(this.baseForm.get(field)?.hasError('minlength')){
        const minLength = this.baseForm.get(field)?.errors?.minlength?.requiredLength;
        return `La contraseña debe tener al menos ${minLength} caracteres`; 
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
