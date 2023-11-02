/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Cat } from './cat.schema';

@Injectable()
export class CatService {
  private readonly cats = [
    {
      id: '1',
      name: 'ohm',
      age: '5',
      breed: 'บ้าน',
    },
    {
      id: '2',
      name: 'nami',
      age: '4',
      breed: 'อเมริกัน ชอร์ตแฮร์',
    }
  ];

  getAllCats(): Cat[] {
    return this.cats;
  }

}
