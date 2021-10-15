import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { SampleComponent } from './sample/sample.component';
import { SoftwaresystemsComponent } from './softwaresystems/softwaresystems.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,SampleComponent, SoftwaresystemsComponent, HomeComponent
  ],
  imports: [

    BrowserModule,

    RouterModule.forRoot([

      {path: 'hello', component: HelloComponent},

      {path: 'sample', component: SampleComponent},    
      
      {path: 'home', component: HomeComponent},

      {path: 'softwaresystems', component: SoftwaresystemsComponent},



    ]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
