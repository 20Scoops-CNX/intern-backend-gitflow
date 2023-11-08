/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator'

export class CreateCatDto {
  @ApiProperty({ type: String, description: 'name' })
  @IsString()
  name: string;

  @ApiProperty({ type: String, description: 'age' })
  @IsString()
  age: string;

  @ApiProperty({ type: String, description: 'breed' })
  @IsString()
  breed: string;
}
