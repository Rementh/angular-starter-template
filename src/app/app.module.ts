/* Modules */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Entry */
import { AppComponent } from './app.component';

/* Custom modules */
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { RoutingModule } from './modules/routing/routing.module';

/* Pages */
import { HomeComponent } from './pages/home/home.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { DialogComponent } from './components/dialog/dialog.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        SettingsComponent,
        DialogComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        CommonModule,
        FormsModule,
        AngularMaterialModule,
        ReactiveFormsModule,
        RoutingModule
    ],
    entryComponents: [
        DialogComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
