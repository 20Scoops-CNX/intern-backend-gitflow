/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';

export class CreateCatDto {
  @ApiProperty({ type: String, description: 'name' })
  name: string;

  @ApiProperty({ type: String, description: 'age' })
  age: string;

  @ApiProperty({ type: String, description: 'breed' })
  breed: string;
}
