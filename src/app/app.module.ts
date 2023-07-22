import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Modulo importados
import { GifsModule } from './gifs/gifs.module'; 
import { SharedModule } from './shared/shared.module';

// Modulo principal APP
import { AppComponent } from './app.component'; 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GifsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
