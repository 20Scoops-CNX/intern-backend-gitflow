/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator'

export class UpdatecatDto {
    @ApiProperty({ type: String, description: 'name' })
    @IsString()
    name: string;

    @ApiProperty({ type: String, description: 'age' })
    @IsString()
     age: string;
  }
  