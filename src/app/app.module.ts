import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { VscodeModule } from '@pivotal-tools/vscode-extension-webview-angular';
import { AppComponent } from './app.component';
import { VscodeComponent } from './vscode/vscode.component';

@NgModule({
  declarations: [
    AppComponent,
    VscodeComponent
  ],
  imports: [
    BrowserModule,
    VscodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
