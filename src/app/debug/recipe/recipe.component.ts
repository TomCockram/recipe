import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { add, remove } from '../../store/recipe/recipe.action';

export interface Recipe {
  ingredients: string;
  recipeName: string;
  recipeText: string;
  // recipeId: string;
}

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
})
export class RecipeComponent implements OnInit {
  public recipes$: Observable<Recipe>;

  constructor(
    private readonly fb: FormBuilder,
    private store: Store<{ recipe: Recipe }>
  ) {
    this.recipes$ = store.select('recipe');
  }

  public recipes: Recipe[] = [];
  public form: FormGroup;

  public ngOnInit(): void {
    this.form = this.createForm();
  }

  public onSubmit() {
    const { ingredients, recipeName, recipeText } = this.form.value;

    this.store.dispatch(add({ ingredients, recipeName, recipeText }));
  }

  public remove() {
    this.store.dispatch(remove());
  }

  private createForm() {
    return this.fb.group({
      ingredients: ['test', [Validators.required]],
      recipeName: ['test', [Validators.required]],
      recipeText: ['test', [Validators.required]],
    });
  }
}
