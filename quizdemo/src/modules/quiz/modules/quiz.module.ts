import { Module } from '@nestjs/common';
import { QuizController } from '../controller/quiz.controller';
import {QuizService} from "../service/quiz.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { QuizEntity } from "../entities/quiz.entity";

@Module({
  imports:[TypeOrmModule.forFeature([QuizEntity])],
  controllers: [QuizController],
  providers:[QuizService],
  exports:[QuizService]
 })
export class QuizModule {}
