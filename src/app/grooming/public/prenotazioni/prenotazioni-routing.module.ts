import { NgModule } from "@angular/core";
import { PrenotazioniComponent } from "./prenotazioni.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
      path: '',
      component: PrenotazioniComponent
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class PrenotazioniRoutingModule { }
  