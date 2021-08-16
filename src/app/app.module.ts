import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from './material-module';
import { AppComponent } from './app.component';
import { AllComponent } from './all/all.component';
import { UnitPipe } from './pipes/unit.pipe';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { AboutModalComponent } from './modals/about-modal/about-modal.component';
// import { ProductFiltersModel } from './models/product-filters/product-filters.model';
import { productFilterReducer } from './product-filter.reducer';

@NgModule({
	declarations: [
		AppComponent,
		AllComponent,
		UnitPipe,
 		AboutModalComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		BrowserAnimationsModule,
		MaterialModule,
		FormsModule,
		ReactiveFormsModule,
		NgxSliderModule,
		StoreModule.forRoot({productFilters: productFilterReducer})		
	],
	providers: [],
	bootstrap: [AppComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
