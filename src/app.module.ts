/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CatModule } from './cat/cat.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:admin@cluster0.vqbvued.mongodb.net/Test_input'),
    CatModule,
  ],
})
export class AppModule {}
