/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class UpdatecatDto {
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
