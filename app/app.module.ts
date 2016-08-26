/**
 * Created by kuangyongsheng on 16/8/24.
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {InMemoryWebApiModule} from 'angular2-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.servoce';
import {HeroModule} from './hero/hero.module';
import {AppComponent} from './app.component';
import {routing} from './app.routing';


@NgModule({
    imports:[
        BrowserModule,
        HttpModule,HeroModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        routing
    ],
    declarations:[AppComponent],
    bootstrap:[AppComponent]
})
export  class AppModule{}