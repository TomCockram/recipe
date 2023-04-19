import { NgModule } from '@angular/core';
import { RecipeAppComponent } from './recipe-app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RecipeAppRoutingModule } from './recipe-routing.module';

@NgModule({
  declarations: [RecipeAppComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    RecipeAppRoutingModule,
  ],
})
export class RecipeAppModule {}
