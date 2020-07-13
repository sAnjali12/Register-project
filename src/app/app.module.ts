import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgxIntlTelInputModule  } from "ngx-intl-tel-input";
import { OtpVerificationModule } from 'otp-verification';
import { CountdownModule } from 'ngx-countdown';
import { NgOtpInputModule } from  'ng-otp-input';
import "@angular/compiler"



import { AppComponent } from './app.component'
import { RegisterComponent } from './user/register/register.component'
import { VerifyComponent } from './user/verify/verify.component'
import { AuthService } from './auth.service';                               
import { UserComponent } from './user/user.component';
import { HomeComponent } from './user/home/home.component';



const routes: Routes = [
  {path: 'home',component: HomeComponent},
  {path: 'verify',component: VerifyComponent},
  { path: 'register', component: RegisterComponent },
 
  { path: '', redirectTo: '/register', pathMatch: 'full'  }

]

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    VerifyComponent,
    UserComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgxIntlTelInputModule,
    BrowserAnimationsModule,
    OtpVerificationModule,
    CountdownModule,
    NgOtpInputModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
