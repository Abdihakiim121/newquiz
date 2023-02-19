import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { QuestionsService } from "../service/questions.service";
import { CreateQuestionDto } from "../dto/createQuestion.dto";
import { QuizService } from "../service/quiz.service";
import { QuestionsEntity } from "../entities/questions.entity";


@Controller('questions')
export class QuestionsController {
  constructor(
    private questionService:QuestionsService,
    private quizService:QuizService,
  ) {}
  @Get()
  findAll(){
    return this.questionService.getAll();
  }

  @UsePipes(ValidationPipe)
  @Post()
  async createQuiz(@Body() createQuestionDto:CreateQuestionDto):Promise<QuestionsEntity>{
    const quiz = await this.quizService.getQuizById(createQuestionDto.quizId);
    console.log("========"+quiz);
    console.log("we will revert this changes");
    return await this.questionService.createQuestion(createQuestionDto, quiz);
  }
}


