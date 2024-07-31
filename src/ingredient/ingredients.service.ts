import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Ingredient } from './interface';
import {
  CreateIngredientDto,
  UpdateIngredientDto,
} from './dto/create-ingredinet.dto';

@Injectable()
export class IngredientsService {
  constructor(
    @Inject('INGREDIENT_MODEL')
    private ingredientModel: Model<Ingredient>,
  ) {}

  async create(createIngredientDto: CreateIngredientDto): Promise<Ingredient> {
    const createdCat = new this.ingredientModel(createIngredientDto);
    return createdCat.save();
  }

  async findAll(): Promise<any[]> {
    return this.ingredientModel.find().exec();
  }

  async update(
    id: string,
    updateIngredientDto: UpdateIngredientDto,
  ): Promise<any> {
    const findIngridient = await this.ingredientModel
      .findOneAndUpdate({ _id: id }, updateIngredientDto, { new: true })
      .exec();
    console.log('in', findIngridient);
    return findIngridient;
  }
}
