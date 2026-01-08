import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OwnerAuthService } from 'src/app/core/services/owner-auth.service';

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

  constructor(private router: Router, private ownerAuth: OwnerAuthService) {}

  ngOnInit() {
    this.mobile =
      history.state?.mobile ||
      localStorage.getItem('mobile') ||
      '';
  }

  verifyOtp() {
    this.ownerAuth.verifyOtp(this.mobile, this.otp).subscribe({
      next: (res: any) => {
        console.log('OTP verification response:', res);
  
        if (res.type === 'NEW') {
          localStorage.setItem('mobile', this.mobile);
          this.router.navigate(['/owner-onboarding'], {state: {mobile: this.mobile}}).then(
            (success) => {
              console.log('Navigation success:', success);
            },
            (error) => {
              console.error('Navigation error:', error);
            }
          );
        }
  
        if (res.type === 'EXISTING') {
          this.ownerAuth.saveToken(res.token);
          setTimeout(() => {
            this.router.navigate(['/owner-status']);
          }, 50);
        }
      },
      error: (err) => {
        console.error('OTP verification error:', err);
        alert('OTP verification failed');
      }
    });
  }
  
}