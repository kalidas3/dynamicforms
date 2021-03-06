import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

 constructor(private http : HttpClient) { }
  url: string = 'http://localhost/AngularNew/';
  addForms(info :any)
  {
	  console.log('came'+ JSON.stringify(info));
	  
	  //return this.http.post(this.url,info);
	  return this.http.post(this.url+'templates-new.php', info)
      .pipe(
        //catchError(this.handleError('signup', info))
      );
	  
  }
  
  GetForms(info:any)
  {
	  return this.http.post(this.url+'templates.php',{id : info});
  }
 
  RemoveForms(info:any)
  {
	 return this.http.delete(this.url+'add-vehicle.php?id='+info);
  }
}
