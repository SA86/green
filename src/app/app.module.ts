import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material-module';
import { AppComponent } from './app.component';
import { AllComponent } from './all/all.component';
import { UnitPipe } from './pipes/unit.pipe';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

@NgModule({
	declarations: [
		AppComponent,
		AllComponent,
		UnitPipe,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		BrowserAnimationsModule,
		MaterialModule,
		FormsModule,
		ReactiveFormsModule,
		NgxSliderModule	
	],
	providers: [],
	bootstrap: [AppComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
