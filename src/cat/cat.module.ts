/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { CatController } from './cat.controller';
import { CatService } from './cat.service';

@Module({
  controllers: [CatController],
  providers: [CatService],
})
export class CatModule {
  constructor(private catsService: CatService) {}
}