import { Connection } from 'mongoose';
import { IngredientSchema } from 'src/schemas/ingredients';

export const IngredientsProviders = [
  {
    provide: 'INGREDIENT_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Ingredient', IngredientSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
