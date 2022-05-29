import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { AnalyticsController } from './analytics.controller';
import { AnalyticsService } from './analytic.service';

@Module({
  imports: [],
  controllers: [AnalyticsController],
  providers: [AnalyticsService, PrismaService],
})
export class AnalyticsModule {}