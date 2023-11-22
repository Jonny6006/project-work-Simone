import { Inject, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { map, of } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  return authService.me().pipe(
    map((user) => {
      if (!user) {
        router.navigate(['/public']);
        return false;
      }
      return true;
    })
  );
};
