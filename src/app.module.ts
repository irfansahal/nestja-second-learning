import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { MongooseModule } from '@nestjs/mongoose';
import { Cat, CatSchema } from './schemas/cat.schema.js';



@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://irfansahal1998_db_user:Taqi123@cluster0.nphrpiz.mongodb.net/first_nest_mongoProject',{
    connectionName: 'first_nest_mongoProject'
  }),
    MongooseModule.forFeature([{name : Cat.name , schema : CatSchema }], 'first_nest_mongoProject')

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
