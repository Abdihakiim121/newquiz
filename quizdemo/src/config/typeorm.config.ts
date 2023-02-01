import { TypeOrmModuleOptions } from "@nestjs/typeorm";
export const typeormConfig:TypeOrmModuleOptions ={
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'password',
  database: 'new_quiz',
  entities: [__dirname + '/../**/*.entity.js'],
  autoLoadEntities:true,
  synchronize: true,
}