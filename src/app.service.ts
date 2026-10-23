import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat } from './schemas/cat.schema.js';
import { Model } from 'mongoose';

@Injectable()
export class AppService {
  
   constructor(@InjectModel(Cat.name, 'first_nest_mongoProject') private catModel : Model<Cat>){}

  getHello(): string {
    return 'Hello World!';
  }

  getOne(id: number):string{
      return `The Id Is ${id}`
  }

  craeateOne(CatObjet : {
      name : string ;
      age : number ;
      breed : string; 
  }){
    const createdCat = new this.catModel(CatObjet);
    return createdCat.save()
  }
}
