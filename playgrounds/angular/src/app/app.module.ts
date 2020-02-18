import { ComponentsModule } from '@dananjoy-angular-lib/components';
import { ModulesModule } from '@dananjoy-angular-lib/modules';
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ModulesModule, ComponentsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
