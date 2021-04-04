import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContractPageComponent } from './components/contract-page/contract-page.component';
import { ContractsComponent } from './components/contracts/contracts.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/dashboard/profile/profile.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [

  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] ,children: [
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
    { path: 'contracts', component: ContractsComponent, canActivate: [AuthGuard]},
    { path: 'contract-page/:id', component: ContractPageComponent, canActivate: [AuthGuard]}
  ]},
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
