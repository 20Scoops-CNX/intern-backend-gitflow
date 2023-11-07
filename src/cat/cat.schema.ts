/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { HydratedDocument } from 'mongoose';
import { CreateCatDto } from './dto/create-cat.dto';

export type CatDocument = HydratedDocument<Cat>;

@Schema()
export class Cat {
  @ApiProperty({
    description: 'The name of the cat',
    example: 'na mi',
  })
  article: CreateCatDto;

  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;

  @Prop()
  Gender: string;

  @Prop()
  vaccine: string;

  @Prop()
  history: string;

  @Prop()
  Price: number;

  @Prop()
  Weight: number;
}

export const CatSchema = SchemaFactory.createForClass(Cat);
