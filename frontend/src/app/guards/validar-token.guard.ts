// import { Injectable } from '@angular/core';
// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
// import { Observable } from 'rxjs';
// import { AuthService } from '../services/eventos.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {

//   constructor(private authService: AuthService, private router: Router) {}

//   canActivate(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

//     if (this.authService.isLoggedIn()) {
//       return true; // Permitir acceso a la ruta
//     } else {
//       this.router.navigate(['/login']); // Redirigir al usuario a la página de inicio de sesión
//       return false; // No permitir acceso a la ruta
//     }
//   }
// }