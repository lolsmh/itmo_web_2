import { Controller, Get, Render, UseInterceptors } from '@nestjs/common';
import { iOSService } from './iOS.service';
import { LoggingInterceptor } from '../app/logging_interceptor';

@Controller()
@UseInterceptors(new LoggingInterceptor())
export class iOSController {
  constructor(private readonly iOSService: iOSService) {}
  @Get('iOS')
  @Render('iOS')
  iOS() {
    return;
  }
}
