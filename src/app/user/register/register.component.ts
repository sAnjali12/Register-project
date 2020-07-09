import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import{AuthService} from '../../auth.service';
import { NgxSpinnerService } from "ngx-spinner"; 
import  {Router} from '@angular/router'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  formData:any={};
  
  
  constructor(private auth: AuthService, private formBuilder:FormBuilder, 
              private SpinnerService: NgxSpinnerService,
              private router:Router,) { }

  ngOnInit() {
    this.formData = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }
  

  register(){
    // this.SpinnerService.show(); 
   
    this.auth.register(this.formData).subscribe(
      ()=>{
        this.router.navigate(['/varify']);
      },(error)=>{
        console.log(error);
     


      }
    )

  }
}
