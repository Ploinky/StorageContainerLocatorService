import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { Item } from 'types';
import { ItemsService } from './items.service';
import { AddItem } from 'types/item';
import { Response } from 'express';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  getContainers(): Item[] {
    return this.itemsService.findAll();
  }

  @Get(':id')
  getContainer(@Param('id') id: string): Item | null {
    return this.itemsService.findById(Number.parseInt(id));
  }

  @Post()
  async addContainer(@Body() addItem: AddItem, @Res() res: Response) {
    console.log(addItem);

    try {
      this.itemsService.create(addItem);
      res.status(HttpStatus.CREATED).send();
    } catch (error: any) {
      res.status(HttpStatus.BAD_REQUEST).send();
    }
  }
}
