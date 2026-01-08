import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { OwnerService } from 'src/app/core/services/owner.service';

type OwnerStatus = 'PENDING' | 'APPROVED' | 'REJECTED';

@Component({
  selector: 'app-owner-status',
  templateUrl: './owner-status.page.html',
  styleUrls: ['./owner-status.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class OwnerStatusPage implements OnInit {

  status: OwnerStatus = 'PENDING';

  constructor(private router: Router, private ownerService: OwnerService) {}

  ngOnInit() {
    // 🔐 Token iruntha matum /me call pannum
    const token = localStorage.getItem('owner_token');

    if (!token) {
      // 🆕 Just registered user
      this.status = 'PENDING';
      return;
    }

    this.ownerService.getMyProfile().subscribe({
      next: (owner) => {
        this.status = owner.status;
      },
      error: () => {
        localStorage.removeItem('owner_token');
        this.router.navigate(['/owner-login'], { replaceUrl: true });
      }
    });  
  }

  goToProfile() {
    // future: owner profile / edit
    alert('Profile page – coming soon');
  }

  logout() {
    localStorage.removeItem('owner_token');
      localStorage.removeItem('mobile');
      this.router.navigate(['/owner-login'], { replaceUrl: true });
  }
}
