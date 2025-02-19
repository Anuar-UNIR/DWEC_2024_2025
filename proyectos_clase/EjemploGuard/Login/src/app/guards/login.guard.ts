import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {

  let isAuth: boolean = false;
  
  const router = inject(Router);
  if (localStorage.getItem('accessToken')) {
    isAuth = true;
  }
  else {
    router.navigate(['/login']);
  }

  return isAuth;
};
