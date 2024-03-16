import { DataSource } from 'typeorm';
import { dataSourceOptions } from 'db/data-source';


export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource(dataSourceOptions);

      return await dataSource.initialize();
    },
  },
];