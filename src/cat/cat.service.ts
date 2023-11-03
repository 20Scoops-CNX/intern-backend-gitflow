/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Cat } from './cat.schema';
import { CreateCatDto } from './dto/create-cat.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdatecatDto } from './dto/update-cat.dto';

@Injectable()
export class CatsService {
  constructor(
    @InjectModel(Cat.name)
    private catModel: Model<Cat>
  ) {}


  async create(createCatDto: CreateCatDto): Promise<Cat> {
    const createdCat = new this.catModel(createCatDto);
    return  createdCat.save();
  }

  async findAll(): Promise<Cat[]> {
    return this.catModel.find().exec();

  }
  
  async delete(id: string): Promise<void> {
    await this.catModel.findByIdAndRemove(id);

  }async update(
    id: string,
    updatecatmentDto: UpdatecatDto,
    ): Promise<Cat>{
    return this.catModel.findByIdAndUpdate(id, updatecatmentDto, {
      new: true,
      })
  };
  

};
