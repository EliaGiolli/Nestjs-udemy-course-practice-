import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';

//Nest will automatically use the string inside the @Controller and join it to the strings inside the HTTP methods
@Controller('/messages')
export class MessagesController {
    @Get()
    listMessages() {}

    @Post()
    //Nest will exctract the body of the incoming request and pass it to the handler
    createMessage(@Body() body:CreateMessageDto) {
        console.log(body)
    }

    @Get('/:id')
    getMessage(@Param('id') id:string) {
        console.log(id)
    }
}


// whem creating a new controller with the Nest CLI, we can add the --flat flag to the command 
// --flat creates the controller inside the parent's folder and doesn't create a new one
// without --flag : /src/messages/controllers/messages.controller.ts

// For each part of an HTTP request Nest has a specific decorator to handle it
// @Body(), @Headers(), @Param('id'), @Query()
// @Body and @Param are called argument decorators