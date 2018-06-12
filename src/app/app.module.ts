///<reference path="../../node_modules/@ngrx/store/src/store_module.d.ts"/>
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {SitesFormComponent} from './sites-form/sites-form.component';
import {SiteComponent} from './site/site.component';
import { sitesReducer} from "./redux/sites.reducer";
import {StoreModule} from "@ngrx/store";
import {SitesService} from "./sites.service";
import {HttpModule} from "@angular/http";
import {SiteEffect} from "./redux/site.effect";
import {EffectsModule} from "@ngrx/effects";


@NgModule({
    declarations: [
        AppComponent,
        SitesFormComponent,
        SiteComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        StoreModule.forRoot({sitePage: sitesReducer})
    ],
    providers: [SitesService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
