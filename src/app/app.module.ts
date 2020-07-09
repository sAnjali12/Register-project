import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'
import { NgxSpinnerModule } from "ngx-spinner";  
import "@angular/compiler"



import { AppComponent } from './app.component'
import { RegisterComponent } from './user/register/register.component'
import { VerifyComponent } from './user/verify/verify.component'
import { AuthService } from './auth.service';
import { UserComponent } from './user/user.component'
// import { AuthGuardService } from './auth-guard.service'

const routes: Routes = [
  {path: 'verify',component: VerifyComponent},
  // canActivate: [AuthGuardService]},
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/register', pathMatch: 'full'  }

]

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    VerifyComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService,
    // AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
