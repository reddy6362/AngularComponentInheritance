import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BaseComponent } from './base/base.component';
import { PecsTextComponent } from './pecs-text/pecs-text.component';
import { TextComponent } from './text/text.component';
import { PecsonlyComponent } from './pecsonly/pecsonly.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    PecsTextComponent,
    TextComponent,
    PecsonlyComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
