import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteCreateComponent } from './view/components/cliente/cliente-create/cliente-create.component';
import { ClienteDeleteComponent } from './view/components/cliente/cliente-delete/cliente-delete.component';
import { ClienteReadComponent } from './view/components/cliente/cliente-read/cliente-read.component';
import { ClienteUpdateComponent } from './view/components/cliente/cliente-update/cliente-update.component';
import { HomeComponent } from './view/components/home/home.component';
import { OsClosedComponent } from './view/components/os/os-closed/os-closed.component';
import { OsCreateComponent } from './view/components/os/os-create/os-create.component';
import { OsReadComponent } from './view/components/os/os-read/os-read.component';
import { OsUpdateComponent } from './view/components/os/os-update/os-update.component';
import { OsViewComponent } from './view/components/os/os-view/os-view.component';
import { TecnicoCreateComponent } from './view/components/tecnico/tecnico-create/tecnico-create.component';
import { TecnicoDeleteComponent } from './view/components/tecnico/tecnico-delete/tecnico-delete.component';
import { TecnicoReadComponent } from './view/components/tecnico/tecnico-read/tecnico-read.component';
import { TecnicoUpdateComponent } from './view/components/tecnico/tecnico-update/tecnico-update.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'tecnicos',
    component: TecnicoReadComponent
  },
  {
    path: 'tecnicos/create',
    component: TecnicoCreateComponent
  },
  {
    path: 'tecnicos/update/:id',
    component: TecnicoUpdateComponent
  },
  {
    path: 'tecnicos/delete/:id',
    component: TecnicoDeleteComponent
  },
  {
    path: 'clientes',
    component: ClienteReadComponent
  },
  {
    path: 'clientes/create',
    component: ClienteCreateComponent
  },
  {
    path: 'clientes/update/:id',
    component: ClienteUpdateComponent
  },
  {
    path: 'clientes/delete/:id',
    component: ClienteDeleteComponent
  },
  {
    path: 'os',
    component: OsReadComponent
  },
  {
    path: 'os/create',
    component: OsCreateComponent
  },
  {
    path: 'os/update/:id',
    component: OsUpdateComponent
  },
  {
    path: 'os/view/:id',
    component: OsViewComponent
  },
  {
    path: 'os/closed',
    component: OsClosedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
