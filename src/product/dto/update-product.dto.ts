/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator'

export class UpdateProductDto{
    @ApiProperty({ type: String, description: 'Spec' })
    @IsString()
    spec:string;

    @ApiProperty({ type: String, description: 'Description' })
    @IsString()
    description: string;

    @ApiProperty({ type: String, description: 'Product price' })
    @IsNumber()
    productPrice: number;
}