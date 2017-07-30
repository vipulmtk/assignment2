import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class CountryListService{
constructor(public httpSvc:Http){}


getCountryListfromApi():Observable<any>{
    return this.httpSvc.get("./app/api/CountryList.json")
    .map((response)=>response.json())
    .catch((error)=>Observable.throw(error.json()));
}
}