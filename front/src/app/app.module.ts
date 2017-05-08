import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { InserirComponent } from './inserir/inserir.component';
import { Uploader }      from 'angular2-http-file-upload';


@NgModule({
  declarations: [
    AppComponent,
    InserirComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    Uploader
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
