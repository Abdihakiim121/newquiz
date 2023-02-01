import { Module } from '@nestjs/common';
import { QuestionsController } from '../controller/questions.controller';
import { QuestionsService } from '../service/questions.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { QuestionsEntity } from "../entities/questions.entity";
import { QuizModule } from "./quiz.module";

@Module({
  imports:[TypeOrmModule.forFeature([QuestionsEntity]),QuizModule],
  controllers: [QuestionsController],
  providers: [QuestionsService],


})
export class QuestionsModule {}
