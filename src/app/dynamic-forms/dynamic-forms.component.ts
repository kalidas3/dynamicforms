import { Component, OnInit } from '@angular/core';
import { FormsService } from "../services/forms.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-dynamic-forms',
  templateUrl: './dynamic-forms.component.html',
  styleUrls: ['./dynamic-forms.component.css']
})
export class DynamicFormsComponent implements OnInit {
	formslist = [];
  constructor(private fm : FormsService,private router: Router) { 
	let id = '';
	this.fm.GetForms(id).subscribe((resp:any)=>
	{
		console.log(JSON.stringify(resp));
		if(resp.status="success")
		{
			this.formslist = resp.vehicles;
		}
	},
	(error:any)=>
	{
		console.log(JSON.stringify(error));
	});
  }

  ngOnInit() {
  }

}
