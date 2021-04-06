import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Reactive Form
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// App routing modules

// App components
import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { MatToolbarModule} from  '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';

// Firebase services + enviorment module
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

// Auth service
import { AuthService } from "./shared/services/auth.service";
import { ProfileComponent } from './components/dashboard/profile/profile.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContractsComponent } from './components/contracts/contracts.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AlertDialogComponent } from './components/alert-dialog/alert-dialog.component';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AddNewContractComponent } from './components/add-new-contract/add-new-contract.component';
import { ContractPageComponent } from './components/contract-page/contract-page.component';
import { AddNewPaymentComponent } from './components/add-new-payment/add-new-payment.component';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    ProfileComponent,
    ContractsComponent,
    AlertDialogComponent,
    AddNewContractComponent,
    ContractPageComponent,
    AddNewPaymentComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatStepperModule,
    MatIconModule,
    MatFormFieldModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatPaginatorModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})

export class AppModule { }
