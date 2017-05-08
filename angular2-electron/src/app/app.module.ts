import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NovoComponent } from './novo/novo.component';
import { ApiService } from './shared';
import { routing } from './app.routing';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload'
import { HomeService } from './home/home.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NovoComponent,
    FileSelectDirective
  ],
  providers: [
    ApiService,
    HomeService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(public appRef: ApplicationRef) {}
}
