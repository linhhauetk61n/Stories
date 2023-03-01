import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const entities = [];

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5434,
  username: 'postgres',
  password: '123',
  database: 'story',
  entities,
  migrations: ['./dist/migrations/*{.js, .ts}'],
  synchronize: true,
  autoLoadEntities: true,
};
