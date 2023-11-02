/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Patch, Delete, Param } from '@nestjs/common';
import { CatService } from './cat.service';

@Controller('Cat')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Post()
  create(): string {
    return 'เพิ่มข้อมูลแมว';
  }

  @Get()
  findAll(): any {
    const Cats = this.catService.getAllCats();
    return Cats;
  }

  @Patch(':id')
  update(@Param('id') id: string): string {
    return `อัปเดตข้อมูลแมว ID: ${id}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string): string {
    return `ลบข้อมูลแมว ID: ${id}`;
  }
}
