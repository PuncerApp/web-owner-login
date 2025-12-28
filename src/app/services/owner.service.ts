import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  private baseUrl = 'http://localhost:8080/api/owners';

  constructor(private http: HttpClient) {}

  getByMobile(mobile: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/by-mobile/${mobile}`);
  }

  registerOwner(payload: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, payload);
  }

  getAllOwners(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  updateStatus(id: number, status: string) {
    return this.http.put(`${this.baseUrl}/${id}/status/${status}`, {});
  }
}
