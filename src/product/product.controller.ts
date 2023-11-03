import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private readonly productService:ProductService) {}

    @Post('addproduct')
    create(): string{
        return 'Add product';
    }

    @Get('getproduct')
    findAll():any {
        const products = this.productService.findAllProducts();
        return products;
    }

    @Patch('edit/:id')
    update(@Param('id') id: string):string{
        return 'Update a #${id} product';
    }

    @Delete('delete/:id')
    remove(@Param('id') id: string) {
        return 'Remove a #${id} product';
    }
}
