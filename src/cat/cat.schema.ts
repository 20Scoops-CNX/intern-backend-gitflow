/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema()

export class Cat {
  @Prop()
  name: string;

  @Prop()
  age: string;

  @Prop()
  breed: string;
}

export const CatSchema = SchemaFactory.createForClass(Cat);
