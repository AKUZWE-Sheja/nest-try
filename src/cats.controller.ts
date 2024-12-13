import { Controller, Get, Req, Post, HttpCode, Param, Body, ForbiddenException, UseFilters } from '@nestjs/common';
import { Request } from 'express';
import { CatsService } from './cats.service';
import { CreateCatDto } from './create-cat.dto';
import { HttpExceptionFilter } from './http-exception.filter';

@Controller('cats')
export class CatsController {
constructor(private readonly catsService: CatsService) {}

@Get()
  getHello(): string {
    return this.catsService.getHello();
  }

@Post('cat')
@HttpCode(204)
  async create(@Body() createCatDto: CreateCatDto) {
    return 'This action adds a new cat';
}


// @Get()
//   findAll(@Req() request: Request): string {
//     return 'This action returns all cats';
//   }


@Get('all')
async findAll(): Promise<any[]> {
  return [];
  throw new ForbiddenException();
}

@Get(':id')
  findOne(@Param('id') id: Number): string {
    console.log(id)
    return `This action returns a #${id} cat`;
  }

// @Get(':id')
//   findOne(@Param() params: any): string {
//     console.log(params.id)
//     return `This action returns a #${params.id} cat`;
//   }
  
}



