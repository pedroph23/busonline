import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppService } from './app.service';
import { AgmCoreModule } from '@agm/core';

import 'rxjs';

@NgModule({
  imports:      
  [ 
  BrowserModule, 
  FormsModule, 
  HttpClientModule,
  AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAvcDy5ZYc2ujCS6TTtI3RYX5QmuoV8Ffw'
    })
  ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ AppService ] 
})
export class AppModule { }
