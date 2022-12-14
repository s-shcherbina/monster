import { DataSource } from "typeorm";

const config = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'monster',
  password: 'monster',
  database: 'monster',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: false,
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  // cli: {
  //   migrationsDir: 'src/migrations'
  // },
});

export default config;