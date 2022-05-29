import { Controller, Get, Render, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { LoggingInterceptor } from './logging_interceptor';

@Controller()
@UseInterceptors(new LoggingInterceptor())
export class AppController {
  constructor(private readonly appService: AppService) {}
}
