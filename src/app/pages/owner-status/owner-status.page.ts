import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { OwnerService } from 'src/app/services/owner.service';

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
    const mobile = localStorage.getItem('mobile')!;
    this.ownerService.getByMobile(mobile).subscribe(owner => this.status = owner.status);
  }

  goToProfile() {
    // future: owner profile / edit
    alert('Profile page – coming soon');
  }

  logout() {
    this.router.navigate(['/owner-login']);
  }
}
