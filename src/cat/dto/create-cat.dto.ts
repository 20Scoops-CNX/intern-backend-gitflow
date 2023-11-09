/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateCatDto {
  @ApiProperty({ type: String, description: 'name' })
  @IsString()
  name: string;

  @ApiProperty({ type: Number, description: 'age' })
  @IsString()
  age: number;

  @ApiProperty({ type: String, description: 'breed' })
  @IsString()
  breed: string;

  @ApiProperty({ type: String, description: 'Gender' })
  @IsString()
  Gender: string;

  @ApiProperty({ type: String, description: 'Vaccine' })
  @IsString()
  vaccine: string;

  @ApiProperty({ type: String, description: 'history' })
  @IsString()
  history: string;

  @ApiProperty({ type: Number, description: 'Price' })
  @IsNumber()
  Price: number;

  @ApiProperty({ type: Number, description: 'Weight' })
  @IsNumber()
  Weight: number;
}
