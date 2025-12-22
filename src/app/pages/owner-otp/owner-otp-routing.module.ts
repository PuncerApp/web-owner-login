import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OwnerOtpPage } from './owner-otp.page';

const routes: Routes = [
  {
    path: '',
    component: OwnerOtpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OwnerOtpPageRoutingModule {}
