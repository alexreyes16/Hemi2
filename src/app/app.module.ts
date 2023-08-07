import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrolistaComponent } from './components/registrolista/registrolista.component';
import { ReactivosComponent } from './components/reactivos/reactivos.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrolistaComponent,
    ReactivosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
