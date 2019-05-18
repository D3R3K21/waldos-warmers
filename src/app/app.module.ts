import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { GiveawayModule } from './shared/giveaway.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
    ], { useHash: true }),
    GiveawayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
