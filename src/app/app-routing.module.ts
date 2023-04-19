import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'debug',
    loadChildren: () =>
      import('./debug/debug.module').then((m) => m.DebugModule),
  },
  {
    path: 'recipe',
    loadChildren: () =>
      import('./recipe-app/recipe.module').then((m) => m.RecipeAppModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
