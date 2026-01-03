import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule, IonInput } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OwnerService } from 'src/app/core/services/owner.service';

@Component({
  selector: 'app-owner-onboarding',
  templateUrl: './owner-onboarding.page.html',
  styleUrls: ['./owner-onboarding.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class OwnerOnboardingPage implements OnInit {

  @ViewChild('mobileInput', { static: false }) mobileInput!: IonInput;

  isEditingMobile = false;
  latitude: number | null = null;
  longitude: number | null = null;
  locationLoading = false;

  // ✅ UPDATED FORM (ONLY ADDITIONS)
  form = {
    ownerName: '',
    shopName: '',
    mobile: '',
    email: '',
    address: '',
    vehicleType: 'BIKE',     // BIKE | CAR | BOTH
    shopType: 'PUNCHER',     // MECHANIC | PUNCHER | BOTH
    tube: false,
    tubeless: false,
    air: false
  };

  constructor(
    private router: Router,
    private ownerService: OwnerService
  ) {}

  ngOnInit() {
    const mobile =
      history.state?.mobile ||
      localStorage.getItem('mobile') ||
      '';

    if (mobile) {
      this.form.mobile = mobile;
      localStorage.setItem('mobile', mobile);
    }
  }

  /** 📍 Location */
  getCurrentLocation() {
    if (!navigator.geolocation) {
      alert('Geolocation not supported');
      return;
    }

    this.locationLoading = true;

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        this.latitude = pos.coords.latitude;
        this.longitude = pos.coords.longitude;
        this.locationLoading = false;
      },
      () => {
        this.locationLoading = false;
        alert('Location permission required');
      }
    );
  }

  enableMobileEdit() {
    this.isEditingMobile = true;
    setTimeout(() => this.mobileInput.setFocus(), 100);
  }

  /** ✅ Submit */
  submit() {
    if (!this.form.ownerName || !this.form.shopName) {
      alert('Owner name & Shop name required');
      return;
    }

    if (!this.latitude || !this.longitude) {
      alert('Location is mandatory');
      return;
    }

    // 🔐 FRONTEND LOGIC SAFETY
    if (this.form.shopType === 'MECHANIC') {
      this.form.tube = false;
      this.form.tubeless = false;
      this.form.air = false;
    }

    const payload = {
      ...this.form,
      latitude: this.latitude,
      longitude: this.longitude
    };

    console.log('Final payload', payload);

    this.ownerService.registerOwner(payload).subscribe({
      next: () => {
        alert('Registration successful. Please login again after approval.');
        
        // 🔥 IMPORTANT: clear token if any
        localStorage.removeItem('owner_token');

        // 🔁 Force re-login
        this.router.navigate(['/owner-login'], {
          replaceUrl: true
        });    
      },
      error: () => alert('Registration failed')
    });
  }
}