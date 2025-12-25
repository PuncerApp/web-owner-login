import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule, IonInput } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
  form = {
    ownerName: '',
    shopName: '',
    mobile: '',
    email: '',
    address: '',
    vehicleType: 'Bike',
    tube: false,
    tubeless: false,
    air: false
  };

  constructor(private router: Router) {}

  ngOnInit() {
    // Auto-fill mobile from login / otp
    this.form.mobile = localStorage.getItem('mobile') || '';
  }

  /** 📍 Get Current Location */
  getCurrentLocation() {
    if (!navigator.geolocation) {
      alert('Geolocation not supported');
      return;
    }

    this.locationLoading = true;

    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.locationLoading = false;

        console.log('Lat:', this.latitude, 'Lng:', this.longitude);
      },
      () => {
        this.locationLoading = false;
        alert('Please allow location access');
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  }

  enableMobileEdit() {
    this.isEditingMobile = true;
    // Ionic rendering wait pannitu focus
    setTimeout(() => {
      this.mobileInput.setFocus();
    }, 100);
  }

  submit() {
    if (!this.form.ownerName || !this.form.shopName) {
      alert('Fill required fields');
      return;
    } else if(!this.latitude || !this.longitude) {
      alert('Location is mandatory');
      return;
    }

    const payload = {
      ...this.form,
      latitude: this.latitude,
      longitude: this.longitude
    };

    console.log('Final payload:', payload);

    // After submit → pending approval
    localStorage.setItem('ownerStatus', 'PENDING');
    this.router.navigate(['/owner-status']);
  }
}