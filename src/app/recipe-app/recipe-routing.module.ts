import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeAppComponent } from './recipe-app.component';

const routes: Routes = [{ path: '', component: RecipeAppComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipeAppRoutingModule {}
