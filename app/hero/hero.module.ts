/**
 * Created by kuangyongsheng on 16/8/24.
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {routing} from './hero.routing';

import {HeroComponent} from './hero.component';
import {HeroListComponent} from './heroList.component';
import  {HeroService} from './hero.service';

@NgModule({
    imports:[
        BrowserModule,
        FormsModule,
        routing
    ],
    providers:[HeroService],
    declarations:[HeroComponent,HeroListComponent],
    bootstrap:[HeroComponent]
})
export  class HeroModule{}