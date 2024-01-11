import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleGuard implements CanActivate {
  constructor (private authService: AuthService, private router :Router) {}
  canActivate(route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): boolean {
  if (this.authService.testerAdmin())
  return true;
  else
  this.router.navigate(['forbidden']);
  return false;
  }
  }
