/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator'

export class CreateProductDto{
    @ApiProperty({ type: String, description: 'Product name' })
    @IsString()
    productName: string;

    @ApiProperty({ type: String, description: 'Spec' })
    @IsString()
    spec:string;

    @ApiProperty({ type: String, description: 'Description' })
    @IsString()
    description: string;

    @ApiProperty({ type: String, description: 'Product price' })
    @IsNumber()
    productPrice: number;

    @ApiProperty({ type: String, description: 'Manufacturing date' })
    @IsNumber()
    mfg: number;

    @ApiProperty({ type: String, description: 'Expiry Date' })
    @IsNumber()
    exp: number;
    
    @ApiProperty ({ type : String, description :'Product Type '})
    @IsString()
    ProductType: string;

    @ApiProperty({  type : Number, description : 'product  Amount'})
    @IsNumber()
    productAmount: number; 
}