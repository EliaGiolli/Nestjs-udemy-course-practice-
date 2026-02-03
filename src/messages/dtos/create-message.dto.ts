import { IsString } from 'class-validator';

export class CreateMessageDto {
    //this makes sure that the content property is a string
    @IsString()
    content: string;
}


//A DTO (data-transfer-object) is a class that shows the carachteristics the incoming request should have to be correct
// the goal of dtos is to tranfer data from a place to another
// inside the tsconfig.json file there is a specific property called "emitDecoratorMetadata" set to "true". This allows some speficic types to make it into the compiled Javascript code

//https://docs.nestjs.com/techniques/validation