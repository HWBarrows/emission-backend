import { DataSource } from 'typeorm';
import { Activity } from './entities/activity.entity';

export const activityProviders = [
    {
        provide: 'Activity_Repository',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Activity),
        inject: ['DATA_SOURCE'],
    }
]