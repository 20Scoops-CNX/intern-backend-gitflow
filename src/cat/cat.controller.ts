/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { CatsService } from './cat.service';
import { Cat } from './cat.schema';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdatecatDto } from './dto/update-cat.dto';
import { ApiBody, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { ApiTags} from '@nestjs/swagger';

@ApiTags('Cat')
@Controller('Cat')
export class CatController {
  constructor(private readonly catsService: CatsService) {}

  @Post('cat')
  @ApiCreatedResponse({ description: 'Cats add' })
  @ApiBody({ type: CreateCatDto })
  async create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }

  @Get('cat')
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get('cat/:id')
  async fineOne(@Param ('id') id: string): Promise<Cat> {
    return this.catsService.findOne(id);
  }

  @Patch('cat/:id')
  @ApiOkResponse({ description: 'Add new cats' })
  async update(@Param('id') id: string, @Body() UpdatecatDto: UpdatecatDto) {
    return this.catsService.update(id, UpdatecatDto);
  }

  @Delete('cat/:id')
  async remove(@Param('id') id: string) {
    return this.catsService.delete(id);
  }
}
