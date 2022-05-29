import { Controller, Get, Render, UseInterceptors, Res } from '@nestjs/common';
import { LoggingInterceptor } from '../app/logging_interceptor';
import { AnalyticsIterseptor } from 'src/app/analitycs.iterseptor';
import { AnalyticsService } from './analytic.service';
import { Response } from 'express';

@Controller()
@UseInterceptors(new LoggingInterceptor(), new AnalyticsIterseptor())
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}
  @Get('analytics')
  showTodo(
      @Res() response: Response,
  ) {
      this
        .analyticsService
        .getAllPages()
        .then((pages) => {
            console.log(`pages: ${pages}`)
            response.render('analytics', { pages: pages });
        });
    }
}
