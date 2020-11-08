import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ConferenceComponent } from './conference/conference.component';
import { AddConfComponent } from './add-conf/add-conf.component';
import { HttpClientModule } from '@angular/common/http' 
import { AppRoutingModule } from './routing/routing.module';
import { ConferenceListComponent } from './conference-list/conference-list.component';

@NgModule({
  declarations: [
    AppComponent,  
    ConferenceComponent, AddConfComponent, ConferenceListComponent
  ],
  imports: [
    BrowserModule, FormsModule,  HttpClientModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
