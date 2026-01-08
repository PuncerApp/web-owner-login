import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OwnerAuthService } from 'src/app/core/services/owner-auth.service';

@Component({
  selector: 'app-owner-login',
  templateUrl: './owner-login.page.html',
  styleUrls: ['./owner-login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class OwnerLoginPage {

  mobile: string = '';

  constructor(private router: Router, private ownerAuth: OwnerAuthService) {}

  sendOtp() {
    this.ownerAuth.sendOtp(this.mobile).subscribe({
      next: () => {
        this.router.navigate(['/owner-otp'], {
          state: { mobile: this.mobile }
        });
      },
      error: () => alert('Failed to send OTP')
    });
  }
}
