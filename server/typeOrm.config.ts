import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5434,
  username: 'postgres',
  password: '123',
  database: 'story',
  entities: ['./dist/src/modules/**/**/*{.js, .ts}'],
  migrations: ['./dist/migrations/*{.js, .ts}'],
});
