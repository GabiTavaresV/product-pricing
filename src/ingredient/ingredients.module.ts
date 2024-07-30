import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { IngredientsService } from './ingredients.service';
import { IngredientsProviders } from 'src/providers/ingredients.providers';
import { IngredientsController } from './ingredients.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [IngredientsController],
  providers: [IngredientsService, ...IngredientsProviders],
})
export class IngredientsModule {}
