import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { AppService } from './app.service.js';
import { Cat } from './schemas/cat.schema.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get(":id")
  getOne(@Param("id" , ParseIntPipe) id : number ): string {
     return this.appService.getOne(id)
  }

  @Post("/createUser")
  create(@Body() CatObjet : {
      name : string ;
      age : number ;
      breed : string; 
  }):Promise<Cat>{
   return this.appService.craeateOne(CatObjet)
   
  }

}
