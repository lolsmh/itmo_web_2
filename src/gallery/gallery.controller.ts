import { Controller, Get, Render, UseInterceptors } from '@nestjs/common';
import { GalleryService } from './gallery.service';
import { LoggingInterceptor } from '../app/logging_interceptor';
import { AnalyticsIterseptor } from 'src/app/analitycs.iterseptor';

@Controller()
@UseInterceptors(new LoggingInterceptor(), new AnalyticsIterseptor())
export class GalleryController {
  constructor(private readonly galeryService: GalleryService) {}
  @Get('gallery')
  @Render('gallery')
  gallery() {
    return;
  }
}
