import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { OwnerGuard } from './core/guards/owner.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'owner-login',
    pathMatch: 'full'
  },

  /* 🔓 PUBLIC */
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

  /* 🔐 PROTECTED */
  {
    path: 'owner-onboarding',
    canActivate: [OwnerGuard],   // ✅ ADD THIS
    loadComponent: () =>
      import('./pages/owner-onboarding/owner-onboarding.page')
        .then(m => m.OwnerOnboardingPage)
  },
  {
    path: 'owner-status',
    canActivate: [OwnerGuard],
    loadComponent: () =>
      import('./pages/owner-status/owner-status.page')
        .then(m => m.OwnerStatusPage)
  },

  /* 🔁 FALLBACK */
  { path: '**', redirectTo: 'owner-login' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
