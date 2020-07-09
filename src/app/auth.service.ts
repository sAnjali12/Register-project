import { Injectable } from '@angular/core';
import { Observable,} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';

export interface UserData{
    firstName: string
    lastName:string
    phoneNumber: string
    email: string
    password: string
}


@Injectable()

export class AuthService {
    
   
    constructor(private http: HttpClient) {}

    public register(userRegister: UserData): Observable<any> {
        debugger;
        // let headers = new HttpHeaders()
        //     .set("Content-Type", "application/json")
        //     .set("lan", "en");
        return this.http.post('https://dev-api.service-genie.xyz/customer/registerUser', userRegister)
                                                         


    }

    
}































