import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5434,
  username: 'postgres',
  password: '123',
  database: 'story',
  entities: [__dirname + '/src/modules/**/**/entities/*.entity{.js, .ts}'],
  migrations: [__dirname + '/migrations/*{.js, .ts}'],
});
