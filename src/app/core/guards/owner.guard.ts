import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

@Injectable({ providedIn: 'root' })
export class OwnerGuard implements CanActivate {
    
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // allow onboarding without token
    if (route.routeConfig?.path === 'owner-onboarding') {
      return true;
    }
    return !!localStorage.getItem('owner_token');
  }
}




