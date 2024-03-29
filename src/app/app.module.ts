import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TutorialDetailsComponent } from './tutorial-details/tutorial-details.component';
import { TutorialsListComponent } from './tutorials-list/tutorials-list.component';
import { AddTutorialComponent } from './add-tutorial/add-tutorial.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    TutorialDetailsComponent,
    TutorialsListComponent,
    AddTutorialComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
