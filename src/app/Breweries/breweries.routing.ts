import { RouterModule, Routes } from "@angular/router";
import { DetailComponent } from "./detail/detail.component";
import { ListComponent } from "./list/list.component";
import { NgModule } from "@angular/core";

const BreweriesRouter: Routes = [
    {
        path: 'list',
        component: ListComponent,
    },
    {
        path: 'details/:id',
        component: DetailComponent,
    },
    {
        path: '**',
        redirectTo: 'list',
        pathMatch: 'full',
    },
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
    },
];
@NgModule({
    imports: [RouterModule.forChild(BreweriesRouter)],
    exports: [RouterModule],
})
export class BreweriesRoutingModule {}