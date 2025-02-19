import { CanActivateFn } from '@angular/router';

export const roleGuard: CanActivateFn = (route, state) => {

  //Aqui obtengo el usuario y su role

  //if (role == admin){ return true}
  return true;
};
