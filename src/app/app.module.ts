import { CountryListService } from './services/typeahead.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
//import { VehicleComponent } from './VehicleDashboard/vehicle.component';
//import {ListService} from "./services/vehicle.service";
//import { VehicledetailsComponent } from './VehicleDetails/vehicledetails.component';
import {AutocompleteComponent} from './typeaheadSearchBox/typeahead.component';
@NgModule({
  declarations: [
    AppComponent,
    AutocompleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CountryListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
