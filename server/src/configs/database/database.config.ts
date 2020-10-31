import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 15433,
  username: 'postgres',
  password: 'postgres',
  database: 'votingapp',
  entities: ["dist/**/*.entity{.ts,.js}"],
  synchronize: true,
  subscribers: ["dist/subscribers/*.subscriber{.ts,.js}"],
}