import { NgModule } from '@angular/core';
import { DebugComponent } from './debug.component';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { RecipeComponent } from './recipe/recipe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DebugRoutingModule } from './debug-routing.module';

@NgModule({
  declarations: [MyCounterComponent, RecipeComponent, DebugComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    DebugRoutingModule,
  ],
})
export class DebugModule {}
