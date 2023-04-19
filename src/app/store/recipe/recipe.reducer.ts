import { createReducer, on } from '@ngrx/store';

import { add, remove } from './recipe.action';
import { Recipe } from 'src/app/debug/recipe/recipe.component';

export const initialState: Recipe[] = [];

export const recipeReducer = createReducer(
  initialState,
  on(add, (state, { recipe }) => [...state, recipe]),
  on(remove, (state) => [...state.slice(0, -1)])
);
