import { RouterModule, Routes } from "@angular/router";
import { DetailComponent } from "./detail/detail.component";
import { ListComponent } from "./list/list.component";


const BreweriesRoutes: Routes = [
    {
        path: 'list',
        component: ListComponent,
    },
    {
        path: 'detail/:id',
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
        pathMatch: 'full'
    },
];



export const BreweriesRouter = RouterModule.forChild(BreweriesRoutes);