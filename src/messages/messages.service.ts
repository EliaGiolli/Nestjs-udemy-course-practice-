// the service "sits" in front of a repository and it's accessed by a controller to handle HTTP requests
import { MessagesRepository } from "./messages.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class MessagesService {

    constructor(public messagesRepo: MessagesRepository) {}

    findOne(id: string) {
        return this.messagesRepo.finOne(id);
    }

    findAll() {
        return this.messagesRepo.finAll();
    }

    create(content: string) {
        this.messagesRepo.create(content);
    }
}

/**
 * Nestjs is built around Dependency Injection
 * "Inversion of Control" principle = classes should not create instances of its dependencies on its own
 *  BAD CODE
 * constructor() {
        this.messagesRepo = new MessagesRepository();
    }
 * The Service is creating its own dependencies

    In a better way of writing DI, the constructor receives the value as a parameter 
    messagesRepo: MessagesRepository;
    constructor(repo: MessagesRepository) {
        this.messagesRepo = repo;
    }
    We're passing a copy of the service inside the constructor.
    The downside is that the service relies upon on a copy of the class
    The Inversion of Control has many downsides:
        - to write a controller we need 3x more code because the controller has dependencies from the service and from repository
    Dependency Injection uses the Inversion of Code principle with significan less lines of code
    DI needs an Injector(or DI container) which is an object

 */