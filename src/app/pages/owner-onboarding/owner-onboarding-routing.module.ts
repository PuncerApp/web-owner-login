import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OwnerOnboardingPage } from './owner-onboarding.page';

const routes: Routes = [
  {
    path: '',
    component: OwnerOnboardingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OwnerOnboardingPageRoutingModule {}
