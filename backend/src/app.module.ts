import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContainersController } from './containers/containers.controller';
import { ContainersService } from './containers/containers.service';
import { ItemsController } from './items/items.controller';
import { ItemsService } from './items/items.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, ContainersController, ItemsController],
  providers: [AppService, ContainersService, ItemsService],
})
export class AppModule {}
