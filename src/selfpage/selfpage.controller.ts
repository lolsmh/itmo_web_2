import { Controller, Get, Render, UseInterceptors } from '@nestjs/common';
import { SelfpageService } from './selfpage.service';
import { LoggingInterceptor } from '../app/logging_interceptor';
import { AnalyticsIterseptor } from 'src/app/analitycs.iterseptor';

@Controller()
@UseInterceptors(new LoggingInterceptor(), new AnalyticsIterseptor())
export class SelfpageController {
  constructor(private readonly selfpageService: SelfpageService) {}
  @Get('selfpage')
  @Render('selfpage')
  selfpage() {
    return;
  }
}
