import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PasswordRecoveryComponent } from './auth/password-recovery/password-recovery.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  IgxCardModule,
  IgxInputGroupModule,
  IgxButtonModule,
  IgxRippleModule,
  IgxComboModule,
  IgxIconModule,
} from 'igniteui-angular';
import { RouterModule } from '@angular/router';
import { NewPasswordComponent } from './auth/new-password/new-password.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';
import { fakeBackendProvider } from './services/fake-backend';
import { ErrorInterceptor } from './intercepters/error.interceptor';
import { JwtInterceptor } from './intercepters/jwt.interceptor';
import { HomeComponent } from './home/home.component';
import { AuthenticationService } from './services/authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    PasswordRecoveryComponent,
    NewPasswordComponent,
    HomeComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    IgxCardModule,
    IgxInputGroupModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxComboModule,
    FormsModule,
    IgxIconModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider,
    UserService,
    AuthenticationService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
