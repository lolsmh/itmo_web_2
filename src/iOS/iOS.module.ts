import { Module } from '@nestjs/common';
import { iOSController } from './iOS.controller';
import { iOSService } from './iOS.service';

@Module({
  imports: [],
  controllers: [iOSController],
  providers: [iOSService],
})
export class iOSModule {}