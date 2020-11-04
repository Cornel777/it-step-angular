import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ConferenceComponent } from './conference/conference.component';
import { AddConfComponent } from './add-conf/add-conf.component';

@NgModule({
  declarations: [
    AppComponent,  
    ConferenceComponent, AddConfComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
