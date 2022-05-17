import { Body, Controller, Delete, Get, Param, Post, Put, Query, Redirect } from '@nestjs/common';
import { Cat } from './interface/cat.interface';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat-dto';
import { UpdateCatDto } from './dto/update-cat-dto';

@Controller('cats')
export class CatsController {

  constructor(private catService: CatsService) {}

  @Post()
  create(@Body() createCatDto: CreateCatDto): void {
    this.catService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catService.findAll();
  }

  @Get('/test')
  @Redirect('http://www.defensoria.df.gov.br')

  @Get(':id')
  findOnde(@Param('id') id: string) {
    return `This action returns a #${id} cat.`;
  }

  @Put(':id')
  update(@Param('id') id:string, @Body() updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat.`;
  }

  @Delete(':id')
  remove(@Param('id') id:string) {
    return `This action removes a #${id} cat.`;
  }

}

