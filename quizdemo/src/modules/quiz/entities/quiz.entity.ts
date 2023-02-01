import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { QuestionsEntity } from "./questions.entity";
import { JoinColumn } from "typeorm/browser";
@Entity('quiz')
export class QuizEntity {
  @PrimaryGeneratedColumn()
  id:number;
  @Column()
  title:string;
  @Column()
  description:string;
  @Column()
  isActive:boolean;
  @OneToMany(()=>QuestionsEntity,(question)=>question.quiz)
  question:QuestionsEntity[]
}