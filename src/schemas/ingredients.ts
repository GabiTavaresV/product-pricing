import * as mongoose from 'mongoose';

export const IngredientSchema = new mongoose.Schema({
  name: String,
  price: Number,
  totalContent: String,
  measure: String,
});
