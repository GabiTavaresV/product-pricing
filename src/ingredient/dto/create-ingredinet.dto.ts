export class CreateIngredientDto {
  readonly name: string;
  readonly price: number;
  readonly totalContent: string;
  readonly measure: string;
}

export class UpdateIngredientDto {
  readonly id: string;
  readonly price?: number;
  readonly totalContent?: string;
  readonly measure?: string;
}
