import { Injectable } from '@nestjs/common';
import { Product } from './product.schema';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
    constructor (@InjectModel(Product.name) private productModel: Model<Product>) {}
    
    async create(createProductDto: CreateProductDto):Promise<Product>{
        const createProduct = new this.productModel(createProductDto);
        return createProduct.save();
    }

    async findAllProducts(): Promise<Product[]> {
        return this.productModel.find().exec();
    }

    async update(
        id: string,
        updateProduct: UpdateProductDto
    ): Promise<Product>{
        return this.productModel.findByIdAndUpdate(id,updateProduct,{
            new: true,
        })
    }

    async delete(id: string): Promise<void>{
        await this.productModel.findByIdAndRemove(id);
    }
}
    