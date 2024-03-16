import { Module } from '@nestjs/common';
import { ActivityService } from './activity.service';
import { ActivityController } from './activity.controller';
import { DatabaseModule } from '../lib/database.module';
import { activityProviders } from './activity.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [ActivityController],
  providers: [
    ...activityProviders,
    ActivityService],
})
export class ActivityModule {}
