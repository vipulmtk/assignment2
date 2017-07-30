import { Component, Output, Input, EventEmitter, ElementRef } from '@angular/core';
import {CountryListService} from "../services/typeahead.service";
import 'rxjs/add/operator/debounceTime';
import 'rxjs/Rx';
@Component({
    selector: 'autocomplete',
    template: `
<div class="container">
	<div class="row">
		<h2>Search Results</h2>
        <div class="search">
        <input type="text" class="input-group input-group-unstyled" maxlength="64" placeholder="Search" [(ngModel)]=query (keyup)=filter() />
    </div>
        </div>
    </div>
<!-- Country List-->
<div class="suggestions" *ngIf="filteredList.length > 0">
    <ul class="Country_list" *ngFor="let item of filteredList">
        <li>
            <a (click)="select(item)"> {{item}}</a>
        </li>
    </ul>
</div>
        `,
        styleUrls: ['./typeahead.component.css']
})
export class AutocompleteComponent {
    public query ='';
    public countries  ;
    public filteredList = [];
    public elementRef;
 
    constructor(myElement: ElementRef, CountrySVC: CountryListService) {
        this.elementRef = myElement;
        CountrySVC.getCountryListfromApi()
            .debounceTime(400)
            .flatMap(result => CountrySVC.getCountryListfromApi())
            .subscribe((result) => {
            this.countries = result.countries;
                console.log(JSON.stringify(result));
            },
            error => {
                console.log(error);
            });
    }

filter() {
    if (this.query.length === 3 || this.query.length > 3){
        this.filteredList = this.countries.filter(function(el){
            return el.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
        }.bind(this));
    }else{
        this.filteredList = [];
    }
}
 
select(item){
    this.query = item;
    this.filteredList = [];
}
}