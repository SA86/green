import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
// import { MatToolbarModule, MatIconModule, MatCardModule, MatButtonModule, MatProgressSpinnerModule, MatInputModule, MatListModule, MatFormFieldModule, MatCheckboxModule } from '@angular/material';
import { MaterialModule } from './material-module';
import { AppComponent } from './app.component';
import { AllComponent } from './all/all.component';
// import { WeightPipe } from './pipes/weight.pipe';
import { UnitPipe } from './pipes/unit.pipe';
import { DispensaryPipe } from './pipes/dispensary.pipe';

@NgModule({
	declarations: [
		AppComponent,
		AllComponent,
		// WeightPipe,
		UnitPipe,
		DispensaryPipe
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		BrowserAnimationsModule,
		MaterialModule
		// MatToolbarModule,
		// MatIconModule,
		// MatButtonModule,
		// MatCardModule,
		// MatProgressSpinnerModule,
		// MatInputModule,
		// MatListModule,
		// MatFormFieldModule,
		// MatCheckboxModule
	],
	// exports: [ MatFormFieldModule, MatInputModule ],
	providers: [],
	bootstrap: [AppComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
