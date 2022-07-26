import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';

import { HeaderComponent } from './view/components/template/header/header.component';
import { FooterComponent } from './view/components/template/footer/footer.component';
import { NavComponent } from './view/components/template/nav/nav.component';
import { HomeComponent } from './view/components/home/home.component';
import { TecnicoReadComponent } from './view/components/tecnico/tecnico-read/tecnico-read.component';
import { TecnicoCreateComponent } from './view/components/tecnico/tecnico-create/tecnico-create.component';
import { TecnicoUpdateComponent } from './view/components/tecnico/tecnico-update/tecnico-update.component';
import { TecnicoDeleteComponent } from './view/components/tecnico/tecnico-delete/tecnico-delete.component';
import { ClienteReadComponent } from './view/components/cliente/cliente-read/cliente-read.component';
import { ClienteCreateComponent } from './view/components/cliente/cliente-create/cliente-create.component';
import { ClienteUpdateComponent } from './view/components/cliente/cliente-update/cliente-update.component';
import { ClienteDeleteComponent } from './view/components/cliente/cliente-delete/cliente-delete.component';
import { OsReadComponent } from './view/components/os/os-read/os-read.component';
import { OsCreateComponent } from './view/components/os/os-create/os-create.component';
import { OsUpdateComponent } from './view/components/os/os-update/os-update.component';
import { OsViewComponent } from './view/components/os/os-view/os-view.component';
import { OsClosedComponent } from './view/components/os/os-closed/os-closed.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    TecnicoReadComponent,
    TecnicoCreateComponent,
    TecnicoUpdateComponent,
    TecnicoDeleteComponent,
    ClienteReadComponent,
    ClienteCreateComponent,
    ClienteUpdateComponent,
    ClienteDeleteComponent,
    OsReadComponent,
    OsCreateComponent,
    OsUpdateComponent,
    OsViewComponent,
    OsClosedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
