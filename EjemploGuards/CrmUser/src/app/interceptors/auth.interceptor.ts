import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  console.log("Paso por el interceptor");
  //ng g interceptor interceptors/auth --skip-tests
  //Opcion 3: creamos el interceptor y mete la cabecera en todas las peticiones
  const cloneRequest = req.clone({
    setHeaders: {
      'Content-type': 'aplication/json',
      'Authorization': localStorage.getItem("accessToken") || ""
    }
  });

  if(cloneRequest.url.includes("auth")){
    return next(req);
  }
  else {
    return next(cloneRequest);
  }
};
