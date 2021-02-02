import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule, MatIconModule, MatCardModule, MatButtonModule, MatProgressSpinnerModule, MatInputModule, MatListModule } from '@angular/material';
import { AppComponent } from './app.component';
import { AllComponent } from './all/all.component';
// import { WeightPipe } from './pipes/weight.pipe';
import { UnitPipe } from './pipes/unit.pipe';

@NgModule({
	declarations: [
		AppComponent,
		AllComponent,
		// WeightPipe,
		UnitPipe
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		BrowserAnimationsModule,
		MatToolbarModule,
		MatIconModule,
		MatButtonModule,
		MatCardModule,
		MatProgressSpinnerModule,
		MatInputModule,
		MatListModule

	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
