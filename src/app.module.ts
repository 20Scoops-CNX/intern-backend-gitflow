/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
//import { AppController } from './app.controller';
//import { AppService } from './app.service';
import { CatModule } from './cat/cat.module';

@Module({
  imports: [
    CatModule,
  ],
   
})
export class AppModule {}
