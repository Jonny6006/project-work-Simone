import { RouterModule, Routes } from '@angular/router';
import { RandomComponent } from './componenti/random/random.component';
import { CategorieComponent } from './componenti/categorie/categorie.component';
import { NgModule } from "@angular/core";
import { ChuckNorrisComponent } from './chuck-norris.component';

const ChuckNorrisRouter: Routes = [
{
  path : '',
  component : ChuckNorrisComponent,
  children : [
  {
    path : 'random',
    component : RandomComponent
  },
  {
    path : 'categorie',
    component : CategorieComponent
  },
  {
    path : '',
    redirectTo : 'random',
    pathMatch : "full"
  },
  {
    path : '**',
    redirectTo : 'random',
    pathMatch : 'full'
  },
]
}

];

@NgModule({
  imports: [RouterModule.forChild(ChuckNorrisRouter)],
  exports: [RouterModule],
})
export class ChuckNorrisRoutingModule {}


