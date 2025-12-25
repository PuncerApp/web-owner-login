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

  otp = '';
  mobile = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.mobile =
      history.state?.mobile ||
      localStorage.getItem('mobile') ||
      '';
  }

  verifyOtp() {
    if (this.otp == '123456') {

      const ownerExists = false; // TEMP

      if (ownerExists) {
        localStorage.setItem('ownerStatus', 'PENDING');
        this.router.navigate(['/owner-status']);
      } else {
        this.router.navigate(['/owner-onboarding']);
      }

    } else {
      alert('Invalid OTP ❌');
    }
  }
}