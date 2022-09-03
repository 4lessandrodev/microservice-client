import { ExecutionContext, RequestTimeoutException } from '@nestjs/common';
import { Injectable, NestInterceptor, CallHandler } from '@nestjs/common';
import { Observable, throwError, TimeoutError } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';

@Injectable()
export class TimeoutInterceptor implements NestInterceptor {
  intercept(_: ExecutionContext, next: CallHandler): Observable<any> {
    const timeMS = 15000;

    return next.handle().pipe(
      timeout(timeMS),
      catchError((err) => {
        if (err instanceof TimeoutError) {
          return throwError(() => new RequestTimeoutException());
        }
        return throwError(() => err);
      }),
    );
  }
}

export default TimeoutInterceptor;
