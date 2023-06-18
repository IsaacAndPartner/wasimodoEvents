import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProductosGrillaComponent } from './components/productos/productos.component';
import { ErrorPagina404Component } from './components/error-pagina404/error-pagina404.component';
import { GestionProductosVistaComponent } from './components/admin/gestion-productos-vista/gestion-productos-vista.component';
import { GestionProductosFormularioComponent } from './components/admin/gestion-productos-formulario/gestion-productos-formulario.component';
import { RegistroeventsComponent } from './components/registroevents/registroevents.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MostrarEventosComponent } from './components/mostrar-eventos/mostrar-eventos.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavbarComponent,
    SidebarComponent,
    ProductosGrillaComponent,
    ErrorPagina404Component,
    GestionProductosVistaComponent,
    GestionProductosFormularioComponent,
    RegistroeventsComponent,
    MostrarEventosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

