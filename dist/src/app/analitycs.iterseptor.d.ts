import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
export declare class AnalyticsIterseptor implements NestInterceptor {
    private analyticsService;
    constructor();
    intercept(context: ExecutionContext, next: CallHandler): Observable<any>;
}
