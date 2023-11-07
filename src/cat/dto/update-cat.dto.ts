/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';

export class UpdatecatDto {
    @ApiProperty({ type: String, description: 'name' })
    readonly name: string;

    @ApiProperty({ type: String, description: 'age' })
    readonly age: string;
  }
  