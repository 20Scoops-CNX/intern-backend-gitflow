/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { ProductModule } from './product/product.module';
import { CatController } from './cat/cat.controller';
import { CatService } from './cat/cat.service';
import { CatModule } from './cat/cat.module';

@Module({
  imports: [
    ProductModule,
    CatModule,
  ],
  providers: [ProductService, CatService],
  controllers: [ProductController, CatController],
   
})
export class AppModule {}
