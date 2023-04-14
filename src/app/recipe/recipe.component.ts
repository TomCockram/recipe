import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface Recipe {
  ingredients: string[];
  recipeName: string;
  recipeText: string;
  recipeId: string;
}

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
})
export class RecipeComponent implements OnInit {
  constructor(private readonly fb: FormBuilder) {}

  public recipes: Recipe[] = [];
  public recipeName = '';
  public form: FormGroup;

  ngOnInit(): void {
    this.form = this.createForm();
  }

  public addRecipes(recipe: Recipe) {
    if (!recipe) {
      return;
    }
    this.recipes.push(recipe);
  }

  public onSubmit() {
    const { ingredients, recipeName, recipeText } = this.form.value;
  }

  private createForm() {
    return this.fb.group({
      ingredients: ['', [Validators.required]],
      recipeName: ['', [Validators.required]],
      recipeText: ['', [Validators.required]],
    });
  }
}
