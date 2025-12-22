import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'owner-login',
    pathMatch: 'full'
  },
  {
    path: 'owner-login',
    loadComponent: () =>
      import('./pages/owner-login/owner-login.page')
        .then(m => m.OwnerLoginPage)
  },
  {
    path: 'owner-otp',
    loadComponent: () =>
      import('./pages/owner-otp/owner-otp.page')
        .then(m => m.OwnerOtpPage)
  },
  {
    path: 'owner-onboarding',
    loadComponent: () =>
      import('./pages/owner-onboarding/owner-onboarding.page')
        .then(m => m.OwnerOnboardingPage)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
