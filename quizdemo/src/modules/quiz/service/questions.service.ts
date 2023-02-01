import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { QuestionsEntity } from "../entities/questions.entity";
import { Repository } from "typeorm";
import { CreateQuestionDto } from "../dto/createQuestion.dto";
import { QuestionsController } from "../controller/questions.controller";
import { QuizEntity } from "../entities/quiz.entity";

@Injectable()
export class QuestionsService {
  constructor(
    @InjectRepository(QuestionsEntity)
    private questionRepository:Repository<QuestionsEntity>
  ) { }

  async getAll(){
    return await this.questionRepository.find();
  }

  async createQuestion(createQuestionDto:CreateQuestionDto, quiz:QuizEntity):Promise<QuestionsEntity>{
    const questions = this.questionRepository.create(createQuestionDto);
    questions.quiz =quiz;
    console.log('hello')
    return  await this.questionRepository.save(questions);
  }
}
