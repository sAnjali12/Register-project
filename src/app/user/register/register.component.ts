import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {AuthService} from '../../auth.service';
import  {Router} from '@angular/router';
// import { SearchCountryField, TooltipLabel, CountryISO } from 'ngx-intl-tel-input';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  errors:any[]=[];
  

  constructor(private fb:FormBuilder,
              private auth:AuthService,
              private router:Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],

    })
  }

  onCountryChange(event){
    alert(event)
  }

  hasError(event: any): void {
    if (!event && this.registerForm.value.phoneNumber !== '') {
      this.registerForm.get('phoneNumber').setErrors(['invalid_cell_phone', true]);
    }
  }

  isInValidForm(fieldName):boolean{
    return this.registerForm.controls[fieldName].invalid && 
    (this.registerForm.controls[fieldName].dirty || this.registerForm.controls[fieldName].touched)

  }

  isRequired(fieldName):boolean{
    return this.registerForm.controls[fieldName].errors.required

  }

  register(){
    console.log(this.registerForm.value)
    this.auth.register(this.registerForm.value).subscribe(
      (token)=>{
        this.router.navigate(['/home']);
      },(errorResponse)=>{
        this.errors=(errorResponse.error.errors);


      }
    )
  }

}
