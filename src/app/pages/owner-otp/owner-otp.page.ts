import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OwnerService } from '../../services/owner.service';

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

  constructor(private router: Router, private ownerService: OwnerService) {}

  ngOnInit() {
    this.mobile =
      history.state?.mobile ||
      localStorage.getItem('mobile') ||
      '';
  }

  verifyOtp() {
    if (this.otp == '123456') {

      // 🔥 REAL BACKEND CALL HERE
      this.ownerService.getByMobile(this.mobile).subscribe({
        next: (owner) => {
          if (owner) {
            // Owner already registered
            localStorage.setItem('ownerStatus', owner.status);
            this.router.navigate(['/owner-status']);
          } else {
            // New owner → onboarding
            this.router.navigate(['/owner-onboarding']);
          }
        },
        error: (err) => {
          console.error('Error checking owner', err);
          alert('Something went wrong. Try again.');
        }
      });

    } else {
      alert('Invalid OTP ❌');
    }
  }
}