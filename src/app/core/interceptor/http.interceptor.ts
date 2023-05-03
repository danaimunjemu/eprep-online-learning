import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import { LoginService } from "../../features/authentication/services/login.service";

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      throw new Error('Method not implemented.');
  }

  // constructor(private loginService:LoginService) { }
  //
  // intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
  //   let token = this.loginService.Token;
  //
  //   if (token) {
  //     request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
  //   }


    // if (!request.headers.has('Content-Type')) {
    //   request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
    // }
    //
    // request = request.clone({ headers: request.headers.set('Accept', 'application/json') });


  //
  //   return next.handle(request).pipe(
  //     map((event: HttpEvent<any>) => {
  //       if (event instanceof HttpResponse) {
  //         // console.log('event--->>>', event);
  //       }
  //       return event;
  //     }));
  // }
}
