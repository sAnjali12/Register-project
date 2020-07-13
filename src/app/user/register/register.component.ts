import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import {AuthService} from '../../auth.service';
import  {Router} from '@angular/router';
import { SearchCountryField, TooltipLabel, CountryISO } from 'ngx-intl-tel-input';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  errors:any[]=[];

  separateDialCode = true;
	SearchCountryField = SearchCountryField;
	TooltipLabel = TooltipLabel;
	CountryISO = CountryISO;
	preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
  

  constructor(private fb:FormBuilder,
              private auth:AuthService,
              private router:Router) { }


  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.registerForm = this.fb.group({
      deviceId:'12345',
      devType:3,
      termsAndCond	:1,
      loginType: 1,
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required,
        Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')],this.isEmailUnique.bind(this)],
      password: ['', [Validators.required,Validators.minLength(7)]]
    })
  }
  
  isEmailUnique(control: FormControl) {
    const q = new Promise((resolve, reject) => {
      setTimeout(() => {
        this.auth.validEmail(control.value).subscribe(() => {
          resolve(null);
        }, () => { resolve({ 'isEmailUnique': true }); });
      }, 1000);
    });
    return q;
  }
      
  // isPhoneUnique(control: FormControl) {
  //   const q = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       this.auth.validPhone(control.value).subscribe(() => {
  //         resolve(null);
  //       }, () => { resolve({ 'isPhoneUnique': true }); });
  //     }, 1000);
  //   });
  //   return q;
  // }
  
  
  

  isInValidForm(fieldName):boolean{
    return this.registerForm.controls[fieldName].invalid && 
    (this.registerForm.controls[fieldName].dirty || this.registerForm.controls[fieldName].touched)

  }

  isRequired(fieldName):boolean{
    return this.registerForm.controls[fieldName].errors.required

  }

  register(){
    console.log(this.registerForm)
    this.auth.register(this.registerForm.value).subscribe(
      ()=>{
        this.router.navigate(['/verify']);
      },(errorResponse)=>{
        this.errors=(errorResponse.error.errors);


      }
    )
  }

}
