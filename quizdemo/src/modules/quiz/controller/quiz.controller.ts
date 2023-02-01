import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import {QuizService} from "../service/quiz.service";
import {CreatequizDto} from "../dto/createquiz.dto";

@Controller('quiz')
export class QuizController {
    constructor(
      private quizService:QuizService) {}
    @Get()
    test(){
       return this.quizService.getAll();
    }

  @Get('/:id')
  getQuizById(@Param('id') id:number){
    return this.quizService.getQuizById(id);
  }

    @UsePipes(ValidationPipe)
    @Post()
   async createQuiz(@Body() createQuiz:CreatequizDto){
      return await this.quizService.createQuiz(createQuiz);
    }
}
