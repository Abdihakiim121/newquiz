import {IsNotEmpty, Length} from "class-validator";

export class CreatequizDto{
    @IsNotEmpty({message:"Title should no be empty"})
    @Length(3,115)
    title: string;

    @IsNotEmpty()
    @Length(3)
    description:string;
}