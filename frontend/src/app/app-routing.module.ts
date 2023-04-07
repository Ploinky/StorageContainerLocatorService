import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainersComponent } from './containers/containers.component';
import { ContainerComponent } from './container/container.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddContainerComponent } from './add-container/add-container.component';
import { ItemsComponent } from './items/items.component';
import { ItemComponent } from './item/item.component';
import { AddItemComponent } from './add-item/add-item.component';

const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'containers', component: ContainersComponent },
    { path: 'containers/new', component: AddContainerComponent },
    { path: 'containers/:containerId', component: ContainerComponent },
    { path: 'items', component: ItemsComponent },
    { path: 'items/new', component: AddItemComponent },
    { path: 'items/:itemId', component: ItemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
