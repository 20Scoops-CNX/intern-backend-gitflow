/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdatecatDto {
  @ApiProperty({ type: String, description: 'Vaccine' })
  @IsString()
  vaccine: string;

  @ApiProperty({ type: String, description: 'history' })
  @IsString()
  history: string;

  @ApiProperty({ type : Number, description : 'price'})
  @IsString()
  price: number;

  @ApiProperty({ type : Number, description : 'Weight'})
  @IsString()
  Weight: number;
}
