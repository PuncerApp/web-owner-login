import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OwnerStatusPage } from './owner-status.page';

const routes: Routes = [
  {
    path: '',
    component: OwnerStatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OwnerStatusPageRoutingModule {}
