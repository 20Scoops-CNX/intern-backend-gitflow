/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { CatsService } from './cat.service';
import { Cat } from './cat.schema';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdatecatDto } from './dto/update-cat.dto';

@Controller('Cat')
export class CatController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto){
    return this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() UpdatecatDto: UpdatecatDto,
  ) {
    return this.catsService.update(id, UpdatecatDto);
  }
  @Delete(':id')
  async remove(@Param('id') id: string) {
  return this.catsService.delete(id);
    
  }

  
  };





  


