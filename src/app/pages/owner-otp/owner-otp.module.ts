import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OwnerOtpPageRoutingModule } from './owner-otp-routing.module';

import { OwnerOtpPage } from './owner-otp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OwnerOtpPageRoutingModule
  ],
  declarations: [OwnerOtpPage]
})
export class OwnerOtpPageModule {}
