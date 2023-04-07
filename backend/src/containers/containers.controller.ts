import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { Container } from 'types';
import { ContainersService } from './containers.service';
import { AddContainer } from 'types/container';
import { Response } from 'express';

@Controller('containers')
export class ContainersController {
  constructor(private readonly containersService: ContainersService) {}

  @Get()
  getContainers(): Container[] {
    return this.containersService.findAll();
  }

  @Get(':id')
  getContainer(@Param('id') id: string): Container | null {
    return this.containersService.findById(Number.parseInt(id));
  }

  @Post()
  async addContainer(@Body() addContainer: AddContainer, @Res() res: Response) {
    console.log(addContainer);

    try {
      this.containersService.create(addContainer);
      res.status(HttpStatus.CREATED).send();
    } catch (error: any) {
      res.status(HttpStatus.BAD_REQUEST).send();
    }
  }
}
