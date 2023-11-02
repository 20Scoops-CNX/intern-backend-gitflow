/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Cat } from './cat.model';

@Injectable()
export class CatService {
  private readonly cats = [
    {
      id: '1',
      name: 'ohm',
      age: '5',
      breed: 'บ้าน',
    },
  ];

  getAllCats(): Cat[] {
    return this.cats;
  }

}
