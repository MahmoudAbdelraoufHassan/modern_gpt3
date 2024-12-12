import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { ContainersModule } from './containers/containers.module';
import { IntersectionDirective } from './directives/intersection.directive';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    IntersectionDirective,
    BrowserModule,
    AppRoutingModule,
    ComponentsModule ,
    ContainersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
