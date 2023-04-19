import { createAction } from '@ngrx/store';
import { Recipe } from 'src/app/debug/recipe/recipe.component';

export const add = createAction('[Recipe Component] Add', (recipe: Recipe) => ({
  recipe,
}));
export const remove = createAction('[Recipe Component] Remove');
