import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HideComponent } from './hide/hide.component';
import { MissComponent } from './miss/miss.component';
import { ShowComponent } from './show/show.component';
import{FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HideComponent,
    MissComponent,
    ShowComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
