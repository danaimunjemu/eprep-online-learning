import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';
import {NotificationService} from "../notification.service";
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class HandleErrorService {

  serviceData: any;

  constructor(
    private notification: NzNotificationService,
    private notificationService: NotificationService,
    private router: Router
    ) { }

  private subject = new Subject<any>();
  isLoading = new Subject();

  sendClickEvent(value:any) {
    this.serviceData=value;
    this.subject.next(value);
  }

    getClickEvent(): Observable<any>{
    return this.subject.asObservable();
  }

  // Handling HTTP Errors using Toaster
  public handleError(err: HttpErrorResponse) {


    let errorMessage: any;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      switch (err.status) {
        case 400:
          errorMessage = `Bad Request. ${err.error.message}`;
          break;
        case 401:
          errorMessage = `You need to log in to do this action. ${err.error.message}`;
          this.router.navigateByUrl('/login');
          break;
        case 403:
          errorMessage = `You don't have permission to access the requested resource. ${err.error.message}`;
          this.router.navigateByUrl('/login');
          break;
        case 404:
          errorMessage = `The requested resource does not exist. ${err.error.message}`;
          break;
        case 412:
          errorMessage = `Precondition Failed. ${err.error.message}`;
          break;
        case 500:
          errorMessage = `Internal Server Error. ${err.error.message}`;
          break;
        case 503:
          errorMessage = `The requested service is not available. ${err.error.message}`;
          break;
        case 422:
          errorMessage = `Validation Error! ${err.error.message}`;
          break;
        default:
          errorMessage = `Something went wrong! ${err.error.message}`;
      }
    }
    if (errorMessage) {
      this.sendClickEvent(false);
      this.isLoading.next(false);
      this.notification.create(
        'error',
        'Error',
        errorMessage
      );
      console.log(errorMessage)
      // this.error( "Error", errorMessage)
    }
  }
}
