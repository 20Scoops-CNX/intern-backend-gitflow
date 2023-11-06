import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './product.schema';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('product')
export class ProductController {
    constructor(private readonly productService:ProductService) {}

    @Post('add')
    async create(@Body() CreateDto: CreateProductDto){
        return this.productService.create(CreateDto)
    }

    @Get('find')
   async findAll(): Promise<Product[]> {
        return this.productService.findAllProducts();

    }

    @Patch('edit/:id')
    async update
    (@Param('id') id: string,
    @Body() UpdateProduct:UpdateProductDto){
        return this.productService.update(id, UpdateProduct);
    }

    @Delete('delete/:id')
    async remove(@Param('id') id: string) {
        return this.productService.delete(id);
    }
}
