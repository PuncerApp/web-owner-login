import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

const OWNER_TOKEN_KEY = 'owner_token';

@Injectable({ providedIn: 'root' })
export class OwnerAuthService {

  private API = 'http://localhost:8080/api/owner-auth';
  private TOKEN_KEY = 'owner_token';

  constructor(private http: HttpClient, private router: Router) {}

  sendOtp(mobile: string) {
    return this.http.post(`${this.API}/send-otp`, { mobile });
  }

  getByMobile(mobile: string): Observable<any> {
    return this.http.get(`${this.API}/by-mobile/${mobile}`);
  }

  verifyOtp(mobile: string, otp: string) {
    return this.http.post(
      `${this.API}/verify-otp`,
      { mobile, otp },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }

  saveToken(token: string) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    this.router.navigate(['/owner-login']);
  }
}
