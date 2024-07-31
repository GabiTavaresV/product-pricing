import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { IngredientsService } from './ingredients.service';
import {
  CreateIngredientDto,
  UpdateIngredientDto,
} from './dto/create-ingredinet.dto';

@Controller('ingredient')
export class IngredientsController {
  constructor(private readonly ingredientsService: IngredientsService) {}

  @Post()
  async create(@Body() createIngredientDto: CreateIngredientDto) {
    return this.ingredientsService.create(createIngredientDto);
  }

  @Get()
  async listAll() {
    return this.ingredientsService.findAll();
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateIngredientDto: UpdateIngredientDto,
  ) {
    if (!Object.keys(updateIngredientDto).length) {
      throw new BadRequestException(
        'O corpo da requisição não pode estar vazio',
      );
    }
    await this.ingredientsService.update(id, updateIngredientDto);
    return JSON.stringify({ message: 'Ingrediente atualizado com sucesso' });
  }
}
