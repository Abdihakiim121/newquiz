import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizModule } from './modules/quiz/modules/quiz.module';
import { QuestionsModule } from "./modules/quiz/modules/questions.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { typeormConfig } from "./config/typeorm.config";
import { QuizEntity } from "./modules/quiz/entities/quiz.entity";
import { QuestionsEntity } from "./modules/quiz/entities/questions.entity";



@Module({
  imports: [TypeOrmModule.forRoot(typeormConfig),
            QuizModule,
            QuestionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
