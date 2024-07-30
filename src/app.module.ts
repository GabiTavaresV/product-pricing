import { Module } from '@nestjs/common';
import { IngredientsModule } from './ingredient/ingredients.module';

@Module({
  imports: [IngredientsModule],
})
export class AppModule {}
