import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DynamicFormsComponent } from './dynamic-forms/dynamic-forms.component';
import { FormNewComponent } from './form-new/form-new.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormsComponent,
    FormNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FormsModule,
	ReactiveFormsModule,
	HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
