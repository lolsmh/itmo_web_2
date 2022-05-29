import { Injectable, NestInterceptor, ExecutionContext, CallHandler, } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AnalyticsService } from 'src/analytics/analytic.service';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AnalyticsIterseptor implements NestInterceptor {
  private analyticsService: AnalyticsService

  constructor() {
    this.analyticsService = new AnalyticsService(new PrismaService())
  }

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map(
          (data) => {
          const response = context.switchToHttp().getResponse();
          console.log("sending analytic to database")
          console.log(response.req.url)
          this.analyticsService.addActivePage({ link: response.req.url })
          return data;
        }
      ),
    );
  }
}