import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-owner-onboarding',
  templateUrl: './owner-onboarding.page.html',
  styleUrls: ['./owner-onboarding.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class OwnerOnboardingPage {

  shop = {
    ownerName: '',
    shopName: '',
    mobile: '',
    email: '',
    address: '',
    vehicleType: 'bike', // bike | car
    services: {
      tube: false,
      tubeless: false,
      air: false
    }
  };

  constructor(private router: Router) {}

  submit() {
    console.log('Shop Details:', this.shop);

    // TEMP: Direct success
    alert('Details submitted. Waiting for admin approval ⏳');

    // NEXT PAGE (future)
    // this.router.navigate(['/owner-status']);
  }
}
