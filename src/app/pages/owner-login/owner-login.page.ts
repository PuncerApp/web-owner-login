import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-owner-login',
  templateUrl: './owner-login.page.html',
  styleUrls: ['./owner-login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class OwnerLoginPage {

  mobile: string = '';

  constructor(private router: Router) {}

  sendOtp() {
    if (this.mobile.length !== 10) {
      return;
    }

    // TEMP OTP FLOW (Backend later)
    console.log('Sending OTP to:', this.mobile);

    this.router.navigate(['/owner-otp'], {
      state: {
        mobile: this.mobile
      }
    });
  }
}
