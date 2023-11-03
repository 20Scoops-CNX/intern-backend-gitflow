/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    ProductModule,
  ],
  providers: [ProductService],
  controllers: [ProductController],
   
})
export class AppModule {}
