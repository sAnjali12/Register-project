import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


export interface UserData{
    firstName: string
    lastName:string
    phone: number
    email: string
    password: string
    countryCode:string
   

}
 
@Injectable()

export class AuthService {
    
    private result;
    
   
    constructor(private http: HttpClient) {}

    public register(userRegister: UserData): Observable<any> {
        
        let phoneNumber=userRegister.phone['number'];
        let countryCode= userRegister.phone['countryCode'];
        userRegister.phone=phoneNumber;
        userRegister.countryCode=countryCode;
        return this.http.post('https://dev-api.service-genie.xyz/customer/registerUser', userRegister).pipe(map(
          (response:any)=> {
           this.result = response
            

          }
        ))
                                                         
      }
    validEmail(email:string){
        return this.http.post('https://api.service-genie.xyz/customer/emailValidation',{email})
      }

    // validPhone(userRegister: UserData) {
    //   let countryCode= this.countryCode;
    //   console.log(this.countryCode)
    //   return this.http.post('https://dev-api.service-genie.xyz/customer/phoneNumberValidation', {countryCode})
    
    // }

    verifyPhoneNumber(userData:any){
        let id = this.result.data.sid
        let expireOtp = this.result.data.expireOtp
        userData.userId=id;
        return this.http.post('https://dev-api.service-genie.xyz/customer/verifyPhoneNumber',userData)
    }
   
}