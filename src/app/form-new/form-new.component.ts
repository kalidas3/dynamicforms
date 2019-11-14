import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Forms, fields } from '../classes/forms';
import { FormsService } from "../services/forms.service";
import { Router } from '@angular/router';

import { map, retry, catchError } from 'rxjs/operators';
@Component({
  selector: 'app-form-new',
  templateUrl: './form-new.component.html',
  styleUrls: ['./form-new.component.css']
})
export class FormNewComponent implements OnInit {

  constructor(private fb : FormBuilder,private fm : FormsService,private router: Router) { }
  
  createForm: FormGroup;
  message : string;

  ngOnInit() {
	this.createForm = this.fb.group({
      title: [],
      fields: this.fb.array([this.fb.group({labelname:'',keyname:'',require:'',minlength:'',maxlength:''})])
    })
  }
	get fields() {
		return this.createForm.get('fields') as FormArray;
	  }	

  addFields() {
    this.fields.push(this.fb.group({labelname:'',keyname:'',require:'',minlength:'',maxlength:''}));
  }

  deleteFields(index) {
    this.fields.removeAt(index);
  }
  Save()
  {
	  console.warn(this.createForm.value);
	  
	  let val = this.createForm.value;
		if (!val) { return; }
		
		this.fm.addForms(val)
		.pipe(retry(3))  // its call the service try 3 times
		.subscribe((resp:any) =>  
		{ 
			console.log('resp-'+ JSON.stringify(resp));
			if(resp.status=='success')
			{
				this.router.navigateByUrl('/dynamic-forms');
			}
			else{
				this.message = resp.message;
			}
		},(error)=>{
			console.log('error -'+ JSON.stringify(error));
		});
  }


}
