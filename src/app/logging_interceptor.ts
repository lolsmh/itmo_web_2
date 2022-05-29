import { Injectable, NestInterceptor, ExecutionContext, CallHandler, } from '@nestjs/common';
import { ConnectableObservable, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const start = performance.now();
    return next.handle().pipe(
      map(
          (data) => {
          const response = context.switchToHttp().getResponse();
          const end = performance.now();
          console.log(end - start);
          response.cookie('server-loading-time', (end - start).toString());
          return data;
        }
      ),
    );
  }
}