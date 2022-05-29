import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Controller, Get, Render, UseInterceptors } from '@nestjs/common';
import { LoggingInterceptor } from 'src/app/logging_interceptor';
import { AnalyticsIterseptor } from 'src/app/analitycs.iterseptor';

@ApiTags('Chat')
@Controller()
@UseInterceptors(new LoggingInterceptor(), new AnalyticsIterseptor())
export class ChatController {
  @ApiOperation({
    summary: 'Enter chat',
    description: 'do it at your own risk!'
  })
  @Get('chat')
  @Render('chat')
  showChat() {
    return;
  }
}