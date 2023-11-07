/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose';
import { CatModule } from './cat/cat.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal :true,
      envFilePath:'.env',
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        uri: config.get<string>('MONGODB_URI'),     
    })
  }),
  CatModule,
  ProductModule
  ],
  controllers:[AppController, ProductController],
  providers: [AppService, ProductService]
})
export class AppModule {}