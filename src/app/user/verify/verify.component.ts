import { Component, OnInit} from '@angular/core';
import  {Router} from '@angular/router';
import { FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from '../../auth.service';


@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {
  form:FormGroup;

  constructor(private auth:AuthService,
              private router:Router,
              private fb:FormBuilder) {}

  ngOnInit() {
    this.initForm();

  }
  initForm(){
    this.form=this.fb.group({
      code:1111
    })
  }
  
  onSubmit() {
    this.auth.verifyPhoneNumber(this.form.value).subscribe(
      (userId)=>{
        this.router.navigate(['/home'])
      }
    )
    
  }
}
