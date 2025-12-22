import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-owner-otp',
  templateUrl: './owner-otp.page.html',
  styleUrls: ['./owner-otp.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class OwnerOtpPage implements OnInit {

  otp: string = '';
  mobile: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    const nav = this.router.getCurrentNavigation();
    this.mobile = nav?.extras?.state?.['mobile'] || '';
  }

  verifyOtp() {
    // TEMP OTP CHECK
    if (this.otp == '123456') {
      console.log('OTP verified for:', this.mobile);

      // NEXT STEP (future)
      this.router.navigate(['/owner-onboarding']);

      alert('OTP Verified ✅');
    } else {
      console.log('Invalid OTP for:', this.mobile);
      alert('Invalid OTP ❌');
    }
  }
}
