import { Module } from '@nestjs/common';
import { SelfpageController } from './selfpage.controller';
import { SelfpageService } from './selfpage.service';

@Module({
  imports: [],
  controllers: [SelfpageController],
  providers: [SelfpageService],
})
export class SelfpageModule {}