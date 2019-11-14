import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynamicFormsComponent } from './dynamic-forms/dynamic-forms.component';
import { FormNewComponent } from './form-new/form-new.component';

const routes: Routes = [
	{ path: 'dynamic-forms', component: DynamicFormsComponent },
	{ path: 'form-new', component: FormNewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
