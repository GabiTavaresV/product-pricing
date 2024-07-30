import { Document } from 'mongoose';

export interface Ingredient extends Document {
  readonly name: string;
  readonly price: number;
  readonly totalContent: string;
  readonly measure: string;
}
