import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private router : Router, private authSvc : AuthService, private fb: FormBuilder) { }

  nameVld = [Validators.required];
  addressVld = [Validators.required];
  passVld = [Validators.required, Validators.minLength(6)];

  profileForm = this.fb.group({
    NAME: new FormControl('',this.nameVld ),
    ADDRESS: new FormControl('',this.addressVld ),
    PASSWORD: new FormControl('',this.passVld )       
  });

  ngOnInit(): void {
  }

  changeProfileInfo(){
    //falta hacer el metodo de llamar al api para cambiar la info
  }

  getErrorMessage(field: string): string{
    let msg : string = '';

    if(field == 'NAME'){
      if(this.profileForm.get(field)?.errors?.required){
        msg = 'The name is required';
      }
    }

    if(field == 'ADDRESS'){
      if(this.profileForm.get(field)?.errors?.required){
        msg = 'The address is required';
      }
    }

    if(field == 'PASSWORD'){
      if(this.profileForm.get(field)?.errors?.required){
        msg = 'The password is required';
      }else if(this.profileForm.get(field)?.hasError('minlength')){
        const minLength = this.profileForm.get(field)?.errors?.minlength?.requiredLength;
        msg = `Must have ${minLength} characters`; 
      }
    }
    return msg;
  }

  isValidField(field: string): boolean{
    
    return ((this.profileForm.get(field)!.touched || this.profileForm.get(field)!.dirty) && 
    !this.profileForm.get(field)!.valid);
  }

}
