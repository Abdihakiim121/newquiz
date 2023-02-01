import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { QuizEntity } from "./quiz.entity";
@Entity('questions')
export class QuestionsEntity{
  @PrimaryGeneratedColumn()
  id:number;
  @Column()
  question:string;
  @ManyToOne(()=>QuizEntity, (quiz)=>quiz.question)
  quiz:QuizEntity
}