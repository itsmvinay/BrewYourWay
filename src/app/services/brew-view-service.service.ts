import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Brew } from '../brew';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrewViewServiceService {

  constructor(private httpclient: HttpClient) { }

  // getAllBrew(): Observable<Brew> {
  //   const brewViewUrl = "http://localhost:3000/brewDetails";
  //   return this.httpclient.get<Brew>(brewViewUrl);
  // }
  getAllBrew(): Observable<Brew> {
    const brewViewUrl = "https://raw.githubusercontent.com/openbrewerydb/openbrewerydb/master/breweries.json";
    return this.httpclient.get<Brew>(brewViewUrl);
  }
}
