import {Injectable} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { QuizEntity } from "../entities/quiz.entity";
import { Repository } from "typeorm";
import { CreatequizDto } from "../dto/createquiz.dto";

@Injectable()
export class QuizService {
    constructor(@InjectRepository(QuizEntity) private quizRepository:Repository<QuizEntity>) {
    }

     async getAll(){
       return await this.quizRepository.find();
    }

   async createQuiz(createQuizDto:CreatequizDto){
        return await this.quizRepository.save(createQuizDto);
    }

    async getQuizById(id: number):Promise<QuizEntity>{
      return  await this.quizRepository.findOne({where: {id},relations:['question']});
    }

  // async findOne(id: number): Promise<Project | null> {
  //   return await this.projectRepository.findOne({
  //     where: {
  //       id,
  //     },
  //     relations: ['user'],
  //   });
  // }
}