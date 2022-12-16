import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SbibankService {

  constructor(private _httpClient:HttpClient) { }
  getBankdetails():Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals");
  }

  getBankdetailsfilter(term:any):Observable<any>{
  return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?filter="+term);
}

getBankdetailssort(column:string,order:string):Observable<any>{
  return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?sortBy="+column+"&order="+order);
}
}
